import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';

import Header from '../../components/Panel/Header';
import Content from '../../components/Content';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import AdminModal from '../../components/AdminModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';
import SearchBox from '../../components/SearchBox';
import { Wraper, MenuBox, MenuButton, Input, ProductCard, ProductField, ProductList, SelectType, OptionType } from '../../styles/admin';


export default function Admin() {
  
  // tamanho da paginação na visualização dos produtos 
  const pageSize = 20;

  // opções para resize da imagem enviada
  const options = {
    maxSizeMB: 0.5,
    // maxWidthOrHeight: 1200,
    useWebWorker: true
  }

  const [fetched, setFetched] = useState(false);
  const [logged, setLogged ] = useState(false);
  const [openModal, setOpenModal ] = useState(false);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu ] = useState('cadastrar');
  const [productList, setProductList] = useState([]);
  const [size, setSize] = useState(1);
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState(
    {
      title: null,
      artist:null,
      price: null,
      genre: null,
      release_date: null,
      state: null,
      type: null,
      featured: false
    });
  const [activeProduct, setActiveProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [filterPost, setFilterPost] = useState('');
  const [featured, setFeatured] = useState(false)
 

    async function checkLogin(){
      const token = localStorage.getItem('userToken');
      const admin = localStorage.getItem('admin');

      if (!token) {
        document.location.href = "/panel/login";
      }

      if (!admin) {
        document.location.href = "/";
      }
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const response = await api.post("loginAdmin", {}, config)
        console.log(response);

        setLogged(true)
      } catch (error) {
        console.log(error)
        toast.error('ocorreu um erro ao processar o token de autenticação')


        if(admin){
          document.location.href = "/"; 
        } else {
          document.location.href = "/panel/login"; 
        }
        return
      }
      setLoading(false)
      setFetched(true)  
  }


  async function Form(thisPage = 1) {
    setLoading(true)
    try {
      const response = await api.post("listProducts", { 
        pageSize,
        page: thisPage,
        filterPost: filterPost ?? null,
        featured
      })

      const result = response.data;

      setProductList(result.data);
      setSize(result.pagination.lastPage ?? size);
      console.log(result);

    } catch (error) {
      console.log('error')
      console.log(error)
      setLoading(false)
    }
    setLoading(false)
}

function handleChangePage(data){
  setLoading(true);
  setPage(data.selected + 1);
  Form(data.selected + 1);
}


  useEffect(() => {    
    if (!fetched) {
      checkLogin();
    }

    if(menu === 'cadastrar') {

    }
  }, [fetched]);

  // atualiza form ao fechar modal
  useEffect(() => {   
     
    if (!openModal && menu === 'remover') {
      Form(page)
    }
  }, [openModal]);

  useEffect(() => {        
    if(menu === 'remover') {
      Form()
    }
  }, [menu]);

  useEffect(() => {
    if(fetched && selectedImage) setImgUrl(URL.createObjectURL(selectedImage))
  }, [selectedImage]);

  useEffect(() => {
    if(fetched) Form()
  }, [filterPost, featured]);
  

  function checkEnter(e) {
    var code = e.keyCode || e.which;
    if(code === 13) { 
      login()
    } 
  }

  function validateForm(){
    if(!product.title) {
      toast.error('preencha o campo do título do produto')
      return false
    }

    if(!product.artist) {
      toast.error('preencha o campo do artista ou empresa do produto')
      return false
    }

    if(!product.price) {
      toast.error('preencha o campo do preço do produto')
      return false   
    }

    if(!product.release_date) {
      toast.error('preencha o ano de lançamento ou fabricação do produto')
      return false   
    }

    if(!product.state) {
      toast.error('preencha o estado do produto')
      return false   
    }

    if(!product.type) {
      toast.error('Informe o tipo do produto')
      return false   
    }

    if(!product.type) {
      toast.error('Informe o tipo do produto')
      return false   
    }

    if(!selectedImage) {
      toast.error('cadastre uma imagem para o produto')
      return false
    }

    return true
  }

  async function addProduct(){
    setLoading(true);

    if(!validateForm()){
      setLoading(false)
      return
    }

    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      
      

      const response = await api.post("addProducts", product, config)

      const result = response.data;
      console.log(result);

      // Salva foto após salvar produto

      const compressedFile = await imageCompression(selectedImage, options);

      const image = new FormData()
      image.append('image', compressedFile)
      image.append("id", result.id);
  
      const config2 = {
          'Content-Type': 'multipart/form-data',
          headers: { Authorization: `Bearer ${token}` }
      }
  
      await api.post('uploadImages', image, config2)
          .then((response) => {
              console.log(response.data)
          })



      toast.success('Produto Cadastrado com sucesso')

      setSelectedImage(null)
      setImgUrl(null)
      setProduct({
        title: null,
        artist:null,
        price: null,
        genre: null,
        release_date: null,
        state: null,
        type: null,
        featured: false
      });
      // setMenu('remover');
    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao adicionar produto')
    }

    setLoading(false);
  }

  function prepareModal(productInfo) {
    console.log('loop?')
    console.log(productInfo)
    setActiveProduct(productInfo);
    setOpenModal(true);
  }

  function formatPrice(price) {
    return price.replace(".", ",");
  }

  function formatDB(price) {
    return price.replace(",", ".");
  }


  return (
  
    <Wraper>
    {loading && <Loading isLoading={loading} />}
      {!loading &&  
      <>
      <Header setMenu={setMenu} setFilterPost={setFilterPost}/>
      <Content>
        { menu === 'cadastrar' ?
        <>
        <MenuBox>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{maxWidth: '45%'}}>
              <Input>
                <p>
                  Descrição do Produto
                </p>
                <input
                  onChange={(e) => setProduct({...product, title: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
                {console.log(product)}
              </Input>
              <Input>
                <p>
                  Artista/Empresa
                </p>
                <input
                  onChange={(e) => setProduct({...product, artist: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
              <Input>
                <p>
                  Preço
                </p>
                <input
                  type="number"
                  onChange={(e) => setProduct({...product, price: formatDB(e.target.value)})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
              <Input >
                <p>
                  Ano de Lançamento
                </p>
                <input
                  type='number'
                  onChange={(e) => setProduct({...product, release_date: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
            </div>
            <div style={{maxWidth: '45%'}}>
              <Input>
                <p>
                  Gênero Musical
                </p>
                <input
                  onChange={(e) => setProduct({...product, genre: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
                {console.log(product)}
              </Input>
              <Input>
                <p>
                  Tipo
                </p>
                <input 
                  onChange={(e) => setProduct({...product, type: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>              
              <Input>
                <p>
                  Estado do Produto
                </p>
                <input
                  onChange={(e) => setProduct({...product, state: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
              <Input style={{margin: '30px auto 0', display: 'flex', fontSize: '20px', cursor: 'pointer'}} onClick={() => setProduct({...product, featured: !product.featured})}>
                <p>
                  <input
                    type='checkbox'
                    checked={product.featured}
                    onChange={() => setProduct({...product, featured: !product.featured})}                    
                  />
                  {' '}Destacar produto
                </p>
              </Input>
            </div>  
          </div>        
          <div>
            <p>
              Imagem do Produto
            </p>
            {imgUrl && <img alt="not found" width={"250px"} src={imgUrl} />}
            <input
              type="file"
              name="image"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
              style={{display: 'block',  margin: '10px auto'}}
            />
            <MenuButton onClick={() => addProduct()}>
              Cadastrar
            </MenuButton>
          </div>
          <ToastContainer position="bottom-left" />
        </MenuBox>
        </> 
        : menu == 'remover' &&
        <>
          <div style={{ margin: '40px auto 20px', width: 'fit-content'}}>
            <div style={{marginBottom: '20px', textAlign: 'center', fontSize: '20px', cursor: 'pointer'}} onClick={() => setFeatured(!featured)}>
              <input type="checkbox"
               checked={featured}
               onChange={() => setFeatured(!featured)}
              />
                Mostrar apenas produtos destaque
            </div>
            <SearchBox  placeholder={'Procurar produto'} handleSearch={(text) => setFilterPost(text)} />
          </div>          
          <ProductList>
            {productList &&
              productList.map(product => (
                <ProductCard key={product.id} onClick={() => prepareModal(product)} key={product.id}>
                    <img src={product.image_url} />
                    <ProductField>
                      {product.title}
                    </ProductField>
                    <ProductField>
                      R$ {formatPrice(product.price.toFixed(2)) ?? 'Sem preço definido' }
                    </ProductField>                
                </ProductCard>                
              ))}

          </ProductList>
          {(size > 1 && !openModal) &&
            <Pagination
              size={size}
              handleChangePage={handleChangePage}
            />
          }
        </>        
        }
        </Content>
        </>
        }
        {openModal && <AdminModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          activeProduct={activeProduct}
        />
        }
      </Wraper>
  )
}
