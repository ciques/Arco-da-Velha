import React, { useState, useEffect } from 'react';
import { Wraper } from '../../styles/admin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Admin() {

  const [fetched, setFetched] = useState(false);
  const [logged, setLogged ] = useState(false);

  

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
       console.log('oi') :        
       <>
       (salve)
       <button onClick={() => {localStorage.removeItem('userToken')}}>logout</button>
       </>
      }
        
      </Wraper>
    )

    
  )
}

