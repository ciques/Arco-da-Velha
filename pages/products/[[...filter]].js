import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../../services/api';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { Content, MenuCategory, ContentProducts, ProductCard, ProductField, ProductList, Filters, CategoryTitle, Categoryinput } from '../../styles/products';
import { SelectType, OptionType } from '../../styles/admin';
import styled from 'styled-components'

const Wraper = styled.div`
    background: White;
    color: #808080;
`




export default function Products() {

  const router = useRouter()

  const OrderBy = [
    ['Nome', 'name'],
    ['Artista', 'artist'],
    ['Preço (maior pro menor)', 'pricedesc'],
    ['Preço (menor pro maior)', 'pricecres']
  ];

  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(1);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [order, setOrder] = useState('name');
  const [types, setTypes] = useState([]);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);

  // useEffect(() => {
  //   if(!router.isReady)return;

  //   setFilter(router.query.filter)
    


  // }, [router.isReady]);


  async function Form() {
    setLoading(true)
    setFilter(router.query.filter ? router.query.filter[0] : null)

    const filterPost = router.query.filter ? router.query.filter[0] : null
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL
      const res = await fetch(
        baseUrl + 'listProducts',
        {
          body: JSON.stringify({
            pageSize,
            page,
            filterPost,
            order
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )

      const result = await res.json();
      console.log(result);

      setProducts(result.data);
      setSize(result.pagination.lastPage ?? size);

      const response = await api.get("listCategories")
      setArtists(response.data.artists)
      setGenres(response.data.genres)
      setTypes(response.data.types)
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

  useEffect(() => {    
    if (fetched) {
      Form();
    }   
  }, [order]);

  function formatPrice(price) {
    return price.replace(".", ",");
  }

  return (
      <Wraper>
        {loading && <Loading isLoading={loading} />}
          <Header logo="../images/logo.jpg" />
          <Content>
            <MenuCategory>
              Categorias:
             
              {genres && 
                <CategoryTitle>
                  Generos Musicais
                </CategoryTitle>
              }
              {genres &&
                <div style={{display: 'grid'}}>
                  {genres.map(e => (
                    <Categoryinput>
                      {e}
                    </Categoryinput>
                  ))}
                </div>
              }
              {types &&
                <CategoryTitle>
                  Produtos
                </CategoryTitle>
              }
              {types &&
                <div style={{display: 'grid'}}>
                  {types.map(e => (
                    <Categoryinput href={'products/'+e}>
                      {e}
                    </Categoryinput>
                  ))}
                </div>
              }
              {artists &&
                <CategoryTitle>
                  Artistas
                </CategoryTitle>
              }
              {artists &&
                <div style={{display: 'grid'}}>
                  {artists.map(e => (
                    <Categoryinput>
                      {e}
                    </Categoryinput>
                  ))}
                </div>
              }                
              
            </MenuCategory>
            <ContentProducts>
              <Filters>
                {filter && 
                  <div style={{marginTop: '20px'}}>
                    EXIBINDO RESULTADOS PARA: {filter.toUpperCase()}
                  </div>
                }
                {console.log(filter)}
                <div style={{marginRight: '40px'}}>
                  <p>
                    Ordenar produtos por
                  </p>
                  <SelectType  onChange={(e) => setOrder(e.target.value)}>
                    {OrderBy.map(type => (
                      <OptionType key={type[0]} value={type[1]}>{type[0]}</OptionType>                
                    ))}
                  </SelectType>  
                  </div>        
              </Filters>
              <ProductList>
                {products &&
                  products.map(product => (
                    <ProductCard key={product.id} onClick={() => {document.location.href = "/product/"+product.id}}>
                        <img style={{maxWidth: '95%'}} src='../images/dummy.jpg' />
                        <ProductField>
                          {product.title} - {product.artist}
                        </ProductField>
                        <ProductField>
                        {product.price ? 'R$' + formatPrice(product.price.toFixed(2)) : 'Sem preço definido' }
                        </ProductField>                
                    </ProductCard>
                  ))}
                </ProductList>
            {size > 1 &&
              <Pagination
                size={size}
                handleChangePage={handleChangePage}
              />
            }
            </ContentProducts>
          </Content>

            
      </Wraper>
  )
}

