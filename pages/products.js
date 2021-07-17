import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import ReactPaginate from 'react-paginate';
import { Photo, Name, ProductCard, ProductField, ProductHeader } from '../styles/products'
import styled from 'styled-components'

const Wraper = styled.div`
    background: White;
    color: #990099;
`




export default function Products() {

  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  async function Form() {
      console.log('oi')
      const hostname = window && window.location && window.location.hostname;
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL
        const res = await fetch(
          baseUrl + 'listProducts',
          {
            body: JSON.stringify({
              pageSize,
              page
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )

        const result = await res.json();
        setProducts(result.data);
        setSize(result.pagination.lastPage ?? size);
        console.log(result);
        // result.user => 'Ada Lovelace'

      } catch (error) {
        console.log('error')
        console.log(error)
      }
      console.log('saiu')
      setLoading(false)
      setFetched(true)
    
  }

  function handleChangePage(data){
    console.log('trocou');
    setLoading(true);
    setPage(data.selected + 1);
    setFetched(false);
  }

  useEffect(() => {    
    if (!fetched) {
      Form();
    }
  }, [fetched]);


  return (
      <Wraper>
        {loading && <Loading isLoading={loading} />}
          <Header/>
          <Content title='PRODUTOS'>
          <ProductHeader style={{margin: '30px 0 20px 0', fontSize: '30px'}}>
            <ProductField>
             <p>Nome</p>
            </ProductField>
            <ProductField>
             <p>Artista</p>
            </ProductField>
            <ProductField>
             <p>Preço</p>
            </ProductField>
            <ProductField>
             <p>Tipo</p>
            </ProductField>
          </ProductHeader>
          {products &&
            products.map(product => (
              <ProductHeader key={product.id}>
                <ProductField>
                  <p >
                    {product.name}
                  </p>
                </ProductField>
                <ProductField>
                  <p>
                    {product.artist}
                  </p>
                </ProductField>
                <ProductField>
                  <p>
                    {product.price ?? 'Sem preço definido' }
                  </p>
                </ProductField>
                <ProductField>
                  <p>
                    {product.type}
                  </p>
                </ProductField>
              </ProductHeader>
            ))}
          </Content>
          {/* depois que possuir imagem
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
          </Content> */}
          {size > 1 &&
            <Pagination
              size={size}
              handleChangePage={handleChangePage}
            />
          }
          {console.log(size)}
      </Wraper>
  )
}

