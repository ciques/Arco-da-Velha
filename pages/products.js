import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'
import { Photo, Name, AccessNumber } from '../styles/products'
import styled from 'styled-components'

const Wraper = styled.div`
    background: White;
    color: #990099;
`




export default function Products() {

  const [fetched, setFetched] = useState(false);
  const [products, setProducts] = useState([]);

  async function Form() {
      console.log('oi')
      const hostname = window && window.location && window.location.hostname;
      try {
        let baseUrl = '';
        if (hostname === 'localhost') {
            baseUrl = 'http://localhost:5000/';
        } else {
            baseUrl = 'https://arco-da-velha-api.herokuapp.com/';
        } 
        const res = await fetch(
          baseUrl + 'listProducts',
          {
            // body: JSON.stringify({
            //   name: event.target.name.value
            // }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )

        const result = await res.json();
        setProducts(result);
        console.log(products);
        // result.user => 'Ada Lovelace'

      } catch (error) {
        console.log('error')
      }
      console.log('saiu')
    
  }

  useEffect(() => {    
    if (!fetched) {
      console.log('oi')
      Form();
      console.log('oi')
    }
  }, [fetched]);


  return (
      <Wraper>
          <Header/>

          <Content title='PRODUTOS'>
          <div>
          {products &&
            products.map(product => (
              <Content key={product.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Photo photo='./images/logo.jpg' />
                  <Name>
                    <p>{product.name}</p>
                  </Name>
                  <AccessNumber>
                    <p style={{ opacity: '80%' }}>Acesso ao App</p>
                  </AccessNumber>
                </div>

              </Content>
            ))}
        </div>          
          </Content>
      </Wraper>
  )
}

