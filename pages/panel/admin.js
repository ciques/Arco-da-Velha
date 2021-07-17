import React, { useState, useEffect } from 'react';
import { Wraper, MenuBox, MenuButton, Input } from '../../styles/admin';
import Header from '../../components/Panel/Header';
import Content from '../../components/Content';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';


export default function Admin() {

  const [fetched, setFetched] = useState(false);
  const [logged, setLogged ] = useState(false);
  const [menu, setMenu ] = useState('cadastrar');
  const [product, setProduct] = useState(
    {
      name:'',
      artist:'',
      price: '',
      type: ''
    })

  

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
  }


  useEffect(() => {    
    if (!fetched) {
      checkLogin();
    }
  }, [fetched]);

  function checkEnter(e) {
    var code = e.keyCode || e.which;
    if(code === 13) { 
      login()
    } 
  }

  async function addProduct(){
    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await api.post("addProducts", product, config)

      const result = response.data;
      console.log(result);
    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao adicionar produto')
      return
    }
  }

  // async function removeProduct(){
  //   if (!product.name && !product.artist && !product.price && !product.type) {
  //     console.log('produto sem nome ,'+product.name)
  //   }
  // }
    return (
    (
      <Wraper>    
      {!logged ? 
       ('s') :        
       <>
          <Header setMenu={setMenu}/>
          <Content>
            { menu==='cadastrar' ?
            <>
            <MenuBox>
              <Input>
                <p>
                  Nome
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
                <input
                  onChange={(e) => setProduct({...product, type: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
              <MenuButton onClick={() => addProduct()}>
                Cadastrar
              </MenuButton>
              <ToastContainer position="bottom-left" />
            </MenuBox>
            </> 
            :
            <>
              menu remove
            </>
            }
          </Content>

       </>
      }
        
      </Wraper>
    )

    
  )
}

