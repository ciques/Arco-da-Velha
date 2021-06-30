import React, { useState, useEffect } from 'react';
import { Wraper, MenuBox, MenuButton, Input } from '../../styles/admin'
import Header from '../../components/Panel/Header'
import Content from '../../components/Content'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Admin() {

  const [fetched, setFetched] = useState(false);
  const [logged, setLogged ] = useState(false);
  const [menu, setMenu ] = useState('cadastrar');
  const [produto, setProduto] = useState(
    {
      Nome:'',
      Artista:'',
      Preco: '',
      Tipo: ''
    })

  

  function checkLogin(){
    const token = localStorage.getItem('userToken');

    if (!token) {
        document.location.href = "/panel/login";
    }

    setLogged(true)
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
                  onChange={(e) => setProduto({...produto, Nome: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
                {console.log(produto)}
              </Input>
              <Input>
                <p>
                  Artista
                </p>
                <input
                  onChange={(e) => setProduto({...produto, Artista: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
              <Input>
                <p>
                  Preço
                </p>
                <input
                  onChange={(e) => setProduto({...produto, Preco: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
              <Input>
                <p>
                  Tipo
                </p>
                <input
                  onChange={(e) => setProduto({...produto, Tipo: e.target.value})}
                  onKeyPress={(e) => checkEnter(e)}
                />
              </Input>
              <MenuButton onClick={() => login()}>
                Pesquisar
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

