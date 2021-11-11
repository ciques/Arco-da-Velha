import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Wraper, Content, ProductInfo, Photo, LinkBar, Questions,
   QuestionInput, ProductArea, Published, Comments, ProductButton, ButtonText } from '../../styles/product';

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
  const [question, setQuestion] = useState('');
  const [logged, setLogged] = useState(false)
  const [comments, setComments] = useState([])

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
      
      const response2 = await api.post("listComments", {id}, config)

      const comments = response2.data.comments
      setComments(comments)
      console.log(comments)

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

  async function sendQuestion() {
    if(!logged){
      toast.warning('você precisa fazer login para comentar')
      return
    }
    try {
      toast.success('Comentário feito com sucesso')
      const token = localStorage.getItem('userToken');
      const id = router.query.id
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await api.post("productComment", {productId: id, question}, config)

      Form();
      setQuestion('')
    } catch (error) {

    }

  }

  function formatToZap(title) {
    console.log(title)
    console.log(title ? title.replace(' ', '%20') : null)
    return title ? title.replace(' ', '%20') : null
  }

  return (
    <Wraper>
      {loading && <Loading isLoading={loading} />}
        <Header setLogged={setLogged} logo="../images/logo.jpg" />

        <Content>
          <LinkBar>
            <a href={'/produtos/'+product.type}>{product.type}</a>
            {' > '} 
            <a href={'/produtos/'+product.genre}>{product.genre}</a>
            {' > '}   
            <a href={'/produtos/'+product.artist}>{product.artist}</a>     
          </LinkBar>
          <ProductArea>
            <Photo src={product.image_url}/>
            <ProductInfo>
              <h1>{product.title}</h1>
              <h2> {product.price ? 'R$ ' + formatPrice(product.price.toFixed(2)) : 'Sem preço definido' }</h2>
              Ano de Lançamento: {product.release_date}
              <p>Estado do produto: {product.state}</p>
              <ProductButton>
                <ButtonText href={'https://wa.me/5551991980229?&text=Ola%20Jorge%20quero%20saber%20mais%20sobre%20o%20anuncio%20de%20'+formatToZap(product.title)}>
                  FALE OU NEGOCIE COM O VENDEDOR
                </ButtonText>
              </ProductButton>
            </ProductInfo> 
          </ProductArea>
          <Questions>
            <p>PERGUNTAS SOBRE ESSE DISCO</p>
            <QuestionInput value={question} onChange={(e) => setQuestion(e.target.value)}/><button onClick={() => sendQuestion()}>Perguntar</button>
            <Published>
              <p>Perguntas e Comentarios</p>
              {comments.length ? 
                comments.map(comment => 
                  <Comments>
                    <p style={{fontSize: '15px', margin: '0'}}>comentario feito por {comment.name}</p>    

                    <p style={{ marginTop: '0'}}>{comment.comment}</p>
                  </Comments>            
                ) : 'Sem perguntas até agora'}
            </Published>
          </Questions>
        </Content>
        <ToastContainer/>        
    </Wraper>
)
}