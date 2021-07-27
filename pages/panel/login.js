import React, { useState, useEffect } from 'react';
import { Wraper, Title, LoginBox, LoginButton, Input } from '../../styles/login'
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../components/Loading';
import 'react-toastify/dist/ReactToastify.min.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'


export default function Home() {

  const [fetched, setFetched] = useState(false);
  const [password, setPassword ] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);


  

  async function checkLogin(){
    const token = localStorage.getItem('userToken');

    if (!token) {
      setFetched(true);
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const response = await api.post("refresh", {}, config)
      console.log(response);
      if(response.status == 200) {
        document.location.href = "/panel/admin";
      }

    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao processar o token de autenticação')
      return
    }
    setLoading(false)
    setFetched(true)  
  }

  async function login() {
    try {
      const response = await api.post("login", { email, password })

      const result = response.data;
      console.log(result);

      if(!result.token) {
        toast.error('email ou senha inválidos tente novamente')
        return
      }

      console.log(result.token);
      const user = result.user;
      
      localStorage.setItem('userToken', result.token);
      localStorage.setItem('userName', user.name);
      document.location.href = "/panel/admin";

    } catch (error) {
      console.log(error)
      toast.error('ocorreu um erro ao iniciar login')
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


  return (
    <Wraper>
      {loading && <Loading isLoading={loading} />}
      <a href='/'>
        voltar ao site
      </a>  
      <Title>
        Bem vindo ao painel de administração
      </Title>
      <LoginBox>
        <Input>
          <p>
            Email
          </p>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => checkEnter(e)}
          />
        </Input>
        <Input>
          <p>
            Senha
          </p>
          <input type='password' 
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => checkEnter(e)}
          />
        </Input>
        <LoginButton onClick={() => login()}>
          Login
        </LoginButton>
        <ToastContainer position='bottom-center' />
      </LoginBox>
      
    </Wraper>
    
  )
}

