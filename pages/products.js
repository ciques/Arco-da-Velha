import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'
import { Photo, Name, ProductCard } from '../styles/products'
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
        const baseUrl = process.env.NEXT_PUBLIC_API_URL
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
        console.log(result);
        // result.user => 'Ada Lovelace'

      } catch (error) {
        console.log('error')
        console.log(error)
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
          {products &&
            products.map(product => (
              <ProductCard key={product.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Photo photo='./images/logo.jpg' />
                  <Name>
                    <p>{product.name}</p>
                  </Name>
                </div>
              </ProductCard>
            ))}
          </Content>
      </Wraper>
  )
}

