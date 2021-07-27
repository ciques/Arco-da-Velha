import React, { useState, useEffect } from 'react';
import { Wraper, MenuBox, MenuButton, Input, ProductField, ProductHeader, SelectType, OptionType } from '../../styles/admin';
import Header from '../../components/Panel/Header';
import Content from '../../components/Content';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';


export default function Admin() {
  
  // tamanho da paginação na visualização dos produtos 
  const pageSize = 10;
  const productType = [
    'Disco',
    'CD',
    'Fita Cassete'
  ];

  const [fetched, setFetched] = useState(false);
  const [logged, setLogged ] = useState(false);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu ] = useState('cadastrar');
  const [productList, setProductList] = useState([]);
  const [size, setSize] = useState(1);
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState(
    {
      name:'',
      artist:'',
      price: '',
      type: productType[0]
    });

  

    async function checkLogin(){
      const token = localStorage.getItem('userToken');

      if (!token) {
          document.location.href = "/panel/login";
      }
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const response = await api.post("refresh", {}, config)
        console.log(response);

        setLogged(true)
      } catch (error) {
        console.log(error)
        toast.error('ocorreu um erro ao processar o token de autenticação')
        document.location.href = "/panel/login";
        return
      }
      setLoading(false)
      setFetched(true)  
  }


  async function Form(thisPage = 1) {
    try {
      const response = await api.post("listProducts", { pageSize, page: thisPage })

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

  useEffect(() => {        
    if(menu === 'remover') {
      Form()
    }
  }, [menu]);

  function checkEnter(e) {
    var code = e.keyCode || e.which;
    if(code === 13) { 
      login()
    } 
  }

  async function addProduct(){
    setLoading(true);

    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await api.post("addProducts", product, config)

      const result = response.data;
      console.log(result);
      toast.success('Produto Cadastrado com sucesso')
      setMenu('remover');
    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao adicionar produto')
      return
    }

    setLoading(false);
  }

  // async function removeProduct(){
  //   if (!product.name && !product.artist && !product.price && !product.type) {
  //     console.log('produto sem nome ,'+product.name)
  //   }
  // }
  return (
  
    <Wraper>
    {loading && <Loading isLoading={loading} />}  
      <Header setMenu={setMenu} />
      <Content>
        { menu === 'cadastrar' ?
        <>
        <MenuBox>
          <Input>
            <p>
              Título
            </p>
            <input
              onChange={(e) => setProduct({...product, name: e.target.value})}
              onKeyPress={(e) => checkEnter(e)}
            />
            {console.log(product)}
          </Input>
          <Input>
            <p>
              Artista
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
              onChange={(e) => setProduct({...product, price: e.target.value})}
              onKeyPress={(e) => checkEnter(e)}
            />
          </Input>
          <Input>
            <p>
              Tipo
            </p>
            <SelectType onChange={(e) => setProduct({...product, type: e.target.value})}>
              {productType.map(type => (
                <OptionType key={type} value={type}>{type}</OptionType>                
              ))}

            </SelectType>
            {/* <input
              onChange={(e) => setProduct({...product, type: e.target.value})}
              onKeyPress={(e) => checkEnter(e)}
            /> */}
          </Input>
          <MenuButton onClick={() => addProduct()}>
            Cadastrar
          </MenuButton>
          <ToastContainer position="bottom-left" />
        </MenuBox>
        </> 
        : menu == 'remover' &&
        <>
          <ProductHeader style={{margin: '30px 0 20px 0', fontSize: '30px'}}>
            <ProductField>
             <p>Álbum</p>
            </ProductField>
            <ProductField>
             <p>Artista</p>
            </ProductField>
            <ProductField>
             <p>Preço</p>
            </ProductField>
            <ProductField>
             <p>Tipo</p>
            </ProductField>
          </ProductHeader>
          {productList &&
            productList.map(product => (
              <ProductHeader key={product.id}>
                <ProductField>
                  <p >
                    {product.name}
                  </p>
                </ProductField>
                <ProductField>
                  <p>
                    {product.artist}
                  </p>
                </ProductField>
                <ProductField>
                  <p>
                    {product.price ?? 'Sem preço definido' }
                  </p>
                </ProductField>
                <ProductField>
                  <p>
                    {product.type}
                  </p>
                </ProductField>
              </ProductHeader>
            ))}
            {size > 1 &&
              <Pagination
                size={size}
                handleChangePage={handleChangePage}
              />
            }
        </>
        
        }
        </Content>
      </Wraper>
  )
}
