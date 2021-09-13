import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { Photo, Name, ProductCard, ProductField, ProductList, Filters } from '../../styles/products';
import styled from 'styled-components'

const Wraper = styled.div`
    background: White;
    color: #808080;
`




export default function Products() {

  const router = useRouter()


  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(1);
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);


  // useEffect(() => {
  //   if(!router.isReady)return;

  //   setFilter(router.query.filter)
    


  // }, [router.isReady]);


  async function Form() {
      const filter = router.query.filter ? router.query.filter[0] : null
      const hostname = window && window.location && window.location.hostname;
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL
        const res = await fetch(
          baseUrl + 'listProducts',
          {
            body: JSON.stringify({
              pageSize,
              page,
              filter
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
      setLoading(false)
      setFetched(true)
    
  }

  function handleChangePage(data){
    setLoading(true);
    setPage(data.selected + 1);
    setFetched(false);
  }

  useEffect(() => {    
    if(!router.isReady)return;
    if (!fetched) {
      Form();
    }
  }, [fetched, router.isReady]);

  function formatPrice(price) {
    return price.replace(".", ",");
  }

  return (
      <Wraper>
        {loading && <Loading isLoading={loading} />}
          <Header logo="../images/logo.jpg" />
          <Content>
            <Filters>            
            </Filters>

            <ProductList>
              {products &&
                products.map(product => (
                  <ProductCard key={product.id}>
                      <img style={{maxWidth: '95%'}} src='./images/dummy.jpg' />
                      <ProductField>
                        {product.artist} - {product.title}
                      </ProductField>
                      <ProductField>
                        R$ {formatPrice(product.price.toFixed(2)) ?? 'Sem preço definido' }
                      </ProductField>                
                  </ProductCard>
                ))}
              </ProductList>
          </Content>
          {/* depois que possuir imagem
          <Content title='PRODUTOS'>
          {products &&
            products.map(product => (
              <ProductCard key={product.id}>

              </ProductCard>
            ))}
          </Content> */}
          {size > 1 &&
            <Pagination
              size={size}
              handleChangePage={handleChangePage}
            />
          }
      </Wraper>
  )
}

