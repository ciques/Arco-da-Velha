import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import { Wraper, Title, LoginBox, LoginButton, Input } from '../../styles/login'
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../components/Loading';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api'


export default function Registro() {

  const [fetched, setFetched] = useState(false);
  const [password, setPassword ] = useState('');
  const [repeatPassword, setRepeatPassword ] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);  
  const [token, setToken] = useState(null);  


    async function login() {
      if(password != repeatPassword) {
        toast.error('as senhas não conferem, tente novamente')
        return
      }
      try {
        const response = await api.post("userRegister", { email, password, name, token })

        const result = response.data;
        console.log(result.user);

        if(!result.user) {
          toast.error('email ou senha inválidos tente novamente')
          return
        }

        console.log(result.token);
        const user = result.user;
        
        localStorage.setItem('userToken', user.token);
        localStorage.setItem('userName', user.name);

        setLoading(true)
        document.location.href = "/panel/admin";

      } catch (error) {
        console.log(error)
        toast.error('ocorreu um erro ao iniciar login')
        return
      }
  }

  useEffect(() => {    
    setLoading(false);
  }, [fetched]);

  function checkEnter(e) {
    var code = e.keyCode || e.which;
    if(code === 13) { 
      login()
    } 
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setToken(value)
  }


  return (
    <Wraper>
      {loading && <Loading isLoading={loading} />}
      
      <Title>
        Bem vindo ao painel de administração
      </Title>
      <LoginBox>
        <Input>
          <p>
            Digite o Seu Nome
          </p>
          <input 
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => checkEnter(e)}
          />
        </Input>
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
        <Input>
          <p>
            Confirme sua senha
          </p>
          <input type='password' 
            onChange={(e) => setRepeatPassword(e.target.value)}
            onKeyPress={(e) => checkEnter(e)}
          />
        </Input>
        <ReCAPTCHA
          style={{ width: 'fit-content', margin:'20px auto'}}
          sitekey="6LcLWfccAAAAAMOiT5exisBfebFD5clOoQqxdD3Z"
          onChange={onChange}
        />
        <div style={{display: 'flex'}}>
          <LoginButton onClick={() => login()}>
            Registrar
          </LoginButton>
          <LoginButton onClick={() => document.location.href = '/'} style={{backgroundColor: '#552b4d'}}>
            <a style={{color: '#fff', textDecoration: 'none'}} href='/'>
              voltar ao site
            </a> 
          </LoginButton>
        </div>

        <ToastContainer position='bottom-center' />
      </LoginBox>
      
    </Wraper>
    
  )
}

