import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import imageCompression from 'browser-image-compression';

import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Loading';
import api from '../../services/api';
import { MenuBox, MenuButton, Input, SelectType, OptionType } from '../../styles/admin';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
  },
};

  // opções para resize da imagem enviada
  const options = {
    maxSizeMB: 0.5,
    // maxWidthOrHeight: 1200,
    useWebWorker: true,
  }

Modal.setAppElement('body');  

function getImgKey(url) {
  if(!url){
    return null
  }

  var key = url.split('amazonaws.com/')
  console.log(key[1])
  return key[1]
}

export default function AdminModal({openModal, setOpenModal, activeProduct}) {

  const [product, setProduct] = useState(activeProduct);
  const [loading, setLoading] = useState(false); 
  const [imgUrl, setImgUrl] = useState(activeProduct.image_url ?? ''); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [fetched, setFetched] = useState(false)

  function afterOpenModal() {

  }

  function closeModal() {
    setOpenModal(false);
  }

  async function removeProduct(){
    setLoading(true);

    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await api.post("removeProducts", {id:product.id, image_url: getImgKey(product.image_url)}, config)

      const result = response.data;
      console.log(result);
      toast.success('Produto Removido com sucesso')
      setLoading(false);
      closeModal()

    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao remover o produto')
      return
    }

    setLoading(false);
  }

  async function updateProduct(){
    setLoading(true);

    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      // se tiver uma imagem editada removera a antiga ao atualizar para a nova

      product.imageUpdate = selectedImage ? getImgKey(product.image_url) : null

      const response = await api.post("updateProducts", {product}, config)

      const result = response.data;
      console.log(result);

      // se for pego uma nova imagem atualiza ela e antes da resize nela

      if(selectedImage) {
        const compressedFile = await imageCompression(selectedImage, options);

        const image = new FormData()
        image.append('image', compressedFile)
        image.append("id", product.id);
    
        const config2 = {
          'Content-Type': 'multipart/form-data',
          headers: { Authorization: `Bearer ${token}` }
        }
    
        await api.post('uploadImages', image, config2)
          .then((response) => {
              console.log(response.data)
          })
      }

      toast.success('Produto Atualizado com sucesso')
      setLoading(false);

    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao remover o produto')
    }

    setLoading(false);
  }


  function formatPrice(price) {
    return price.replace(",", ".");
  }

  useEffect(() => {
    if(fetched) {
      if(selectedImage) setImgUrl(URL.createObjectURL(selectedImage))
    } else {
      setFetched(true)
    }
  }, [selectedImage]);

  return (
    <div>
      {console.log('producto es: ', activeProduct)}
      {console.log('etbm: ', product)}
      <Modal
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {loading && <Loading isLoading={loading} />}  
        <MenuBox>
            <MenuButton onClick={() => closeModal()}>
              voltar
            </MenuButton>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{width: '50%'}}>
              <Input>
                <p>
                  Descrição do Produto
                </p>
                <input
                  onChange={(e) => setProduct({...product, title: e.target.value})}
                  value={product.title}
                />
              </Input>
              <Input>
                <p>
                  Artista/Fabricante
                </p>
                <input
                  onChange={(e) => setProduct({...product, artist: e.target.value})}
                  value={product.artist}
                />
              </Input>
              <Input>
                <p>
                  Preço
                </p>
                <input
                  type='number'
                  onChange={(e) => setProduct({...product, price: formatPrice(e.target.value)})}
                  value={product.price}
                />
              </Input>
              <Input>
                <p>
                  Ano de Lançamento
                </p>
                <input
                  type='number'
                  onChange={(e) => setProduct({...product, release_date: e.target.value})}
                  value={product.release_date}        
                />
              </Input>
              </div>
              <div style={{width: '50%'}}>
                <Input>
                  <p>
                    Gênero Musical
                  </p>
                  <input
                    onChange={(e) => setProduct({...product, genre: e.target.value})}
                    value={product.genre}
                  />
                  {console.log(product)}
                </Input>
                <Input>
                  <p>
                    Tipo
                  </p>
                  <input 
                    onChange={(e) => setProduct({...product, type: e.target.value})}
                    value={product.type}
                  />
                </Input>              
                <Input>
                  <p>
                    Estado
                  </p>
                  <input
                    onChange={(e) => setProduct({...product, state: e.target.value})}
                    value={product.state}
                  />
                </Input>
                <Input style={{margin: '30px auto 0', display: 'flex', fontsize: '20px', cursor: 'pointer'}} onClick={() => setProduct({...product, featured: !product.featured})}>
                <p>
                  <input
                    type='checkbox'
                    checked={product.featured}
                    onClick={() => setProduct({...product, featured: !product.featured})}  
                  />
                  {' '} Destacar produto
                </p>
                {console.log(product.featured)}
                </Input>
              </div>          
            </div>
            <p>
              Imagem do Produto
            </p>
            {imgUrl && <img alt="not found" src={imgUrl} />}
            <input
              type="file"
              name="image"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
              style={{display: 'block',  margin: '10px auto'}}
            />
          <div style={{display: 'flex', marginTop: '20px'}}>
            <MenuButton onClick={() => updateProduct()}>
              Editar
            </MenuButton>
            <MenuButton onClick={() => removeProduct()}>
              Remover
            </MenuButton>
          </div>

          <ToastContainer position="bottom-left" />
        </MenuBox>
        <ToastContainer position="bottom-left" />
      </Modal>
    </div>
  );
}