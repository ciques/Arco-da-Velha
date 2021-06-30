import React, { useState, useEffect } from 'react';
import { Wraper, Title, LoginBox, LoginButton, Input } from '../../styles/login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'


export default function Home() {

  const [fetched, setFetched] = useState(false);
  const [password, setPassword ] = useState('');
  const [email, setEmail] = useState('');

  

  function checkLogin(){
    const token = localStorage.getItem('userToken');

    if (!token) {
      setFetched(true);
      return;
    }
  }

  async function login() {
    const hostname = window && window.location && window.location.hostname;
    try {
      // let baseUrl = '';
      // if (hostname === 'localhost') {
      //     // baseUrl = 'http://localhost:5000/';
      //     baseUrl = 'https://arco-da-velha-api.herokuapp.com/';
      // } else {
      //     baseUrl = 'https://arco-da-velha-api.herokuapp.com/';
      // } 
      // const res = await fetch(
      //   baseUrl + 'login',
      //   {
      //     body: JSON.stringify({
      //       email,
      //       password
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     method: 'POST'
      //   }
      // )

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
        <ToastContainer position="bottom-left" />
      </LoginBox>
      
    </Wraper>
    
  )
}

