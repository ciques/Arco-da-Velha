import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Wraper, Content, ProductInfo, Photo, LinkBar } from '../../styles/product';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';


export default function Product() {

  const router = useRouter()

  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {    
    if(!router.isReady)return;
    if (!fetched) {
      Form();
    }
  }, [fetched, router.isReady]);

  
  async function Form() {
    setLoading(true)
    try {
      const id = router.query.id
      const token = localStorage.getItem('userToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await api.post("product", {id}, config)

      const result = response.data;
      console.log(result);

      setProduct(result[0]);
      console.log(result[0]);    

    } catch (error) {
      console.log('error')
      console.log(error)
    }
    setLoading(false)
    setFetched(true)     
  }

  function formatPrice(price) {
    return price.replace(".", ",");
  }

  function showData() {
    const data = new Date(product.release_date)
    let dataFormatada = ((data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()));
    return dataFormatada
  }

  return (
    <Wraper>
      {loading && <Loading isLoading={loading} />}
        <Header logo="../images/logo.jpg" />
        <LinkBar>
          <a href={'/products/'+product.type}>{product.type}</a>
          {' > '} 
          <a href={'/products/'+product.genre}>{product.genre}</a>
          {' > '}   
          <a href={'/products/'+product.artist}>{product.artist}</a>     
        </LinkBar>
        <Content>
          <Photo src='../images/dummy.jpg'/>
          <ProductInfo>
            <h1>{product.title}</h1>
            <h2> {product.price ? 'R$ ' + formatPrice(product.price.toFixed(2)) : 'Sem preço definido' }</h2>
            Data de Lançamento: {showData()}
            </ProductInfo> 
        </Content>
          
    </Wraper>
)
}