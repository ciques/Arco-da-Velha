import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
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
  },
};

Modal.setAppElement('body');  


export default function AdminModal({openModal, setOpenModal, activeProduct}) {

  const [product, setProduct] = useState(activeProduct);
  const [loading, setLoading] = useState(false);  

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
      const response = await api.post("removeProducts", {id:product.id}, config)

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
      const response = await api.post("updateProducts", {product}, config)

      const result = response.data;
      console.log(result);
      toast.success('Produto Atualizado com sucesso')
      setLoading(false);

    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao remover o produto')
      return
    }

    setLoading(false);
  }


  function formatPrice(price) {
    return price.replace(",", ".");
  }

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
        <button onClick={closeModal}>close</button>
        <MenuBox>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
              <Input>
                <p>
                  Título
                </p>
                <input
                  onChange={(e) => setProduct({...product, title: e.target.value})}
                  value={product.title}
                />
              </Input>
              <Input>
                <p>
                  Artista
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
              </div>
              <div>
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
              </div>          
            </div>
            <div>
            <Input>
                <p>
                  Data de Lançamento
                </p>
                <input
                  type='date'
                  onChange={(e) => setProduct({...product, release_date: e.target.value})}
                  value={product.release_date}              
                />
              </Input>
            </div>
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