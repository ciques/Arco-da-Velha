import React, { useState, useEffect } from 'react';

import Pagination from '../components/Pagination';
import Header from '../components/Header'
import Content from '../components/Content'
import { Wraper, Featured, ProductCard, ProductField, ProductList, ProductPhoto } from '../styles/index';
import api from '../services/api';

export default function Home() {

  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [size, setSize] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [logged, setLogged] = useState(false);


  async function Form() {
    setLoading(true)
    try {
      const response = await api.post("listProducts", { 
        pageSize,
        page: page,
        featured: true
      })

      const result = response.data;

      setProductList(result.data);
      setSize(result.pagination.lastPage ?? size);
      console.log(result);

    } catch (error) {
      console.log('error')
      console.log(error)
      setLoading(false)
    }
    setFetched(true)
    setLoading(false)
  }

  function handleChangePage(data){
    setLoading(true);
    setPage(data.selected + 1);
    Form()
  }

  useEffect(() => {    
    if (!fetched) {
      Form();
    }
  }, );

  function formatPrice(price) {
    return price.replace(".", ",");
  }


  return (
      <Wraper>
          <Header setLogged={setLogged} logo="./images/logo.jpg"/>
          <Content>            
            <Featured>
              Do Arco Da Velha para você
            </Featured>
            <ProductList>
              {productList.length ?
                productList.map(product => (
                  <ProductCard key={product.id} onClick={() => {document.location.href = "/produto/"+product.id}}>
                    <ProductPhoto>
                      <img style={{width: '100%', height: '100%'}} src={product.image_url} />
                    </ProductPhoto>
                    <div>
                      <ProductField>
                        {product.title}
                      </ProductField>
                      <ProductField>
                      {product.price ? 'R$' + formatPrice(product.price.toFixed(2)) : 'Sem preço definido' }
                      </ProductField> 
                    </div>              
                  </ProductCard>
                )) :
                <h4>SEM PRODUTOS CADASTRADOS ATUALMENTE</h4>
              
              }
            </ProductList>
            {size > 1 &&
              <Pagination
                size={size}
                handleChangePage={handleChangePage}
              />
            }
          </Content>
      </Wraper>
  )
}

