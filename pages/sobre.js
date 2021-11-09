import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import { Wraper, Content, History } from '../styles/sobre';


export default function Home() {
  const [logged, setLogged] = useState(false);


  return (
      <Wraper>
          <Header setLogged={setLogged} logo="./images/logo.jpg">
          
          </Header>
          <Content>  
            <img  src="./images/logo2.jpg"/>
            <History>
              História da Empresa  Arco da Velha Discos POA/RS
              No início, era um colecionador de discos de vinil, conhecido antes como lps ou os famosos bolachões. Por volta do ano 2003, descobri uma feira de lps que tinha no 
              Mercado Público onde havia alguns expositores que vendiam seus discos. Como colecionava e já tinha uma quantidade razoável de discos, fui convidado  
              a participar da feira, que na qual  sou integrante até hoje.<br/><br/>

              A feira de Vinil no Mercado Público faz parte da programação de  eventos culturais e feiras promovidas pela Prefeitura de Porto Alegre, na qual tem a duração de 05 dias,
              de segunda a sábado e acontece todo o mês com datas específicas.<br/><br/>

              Em 05 /07/2010 foi criada o Certificado da Condicão de  MEI ( Micro Empreendedor Individual), com nome Empresarial de Jorge Spilmann da Rosa.
              Com o propósito de sair da informalidade e ter acesso oficialmente ao mercado de vendas e expandir as vendas da empresa, comecei a participar de outras feiras e eventos, 
              onde exponho e comercializo meus produto até hoje.<br/><br/>

              Com o avanço tecnológico e advento da internet  e mídias socias hoje em dia, foi criada várias ferramentas para impulsionar as vendas de produtos das empresas, como, facebook, 
              Whatsapp, Instagram e sites on line de compra e venda de produtos variáveis, onde se tornou uma opção nova para otimizar e expandir  as vendas das empresas.<br/><br/>

              Hoje trabalho com mais produtos além  dos lps, como cds, fitas K7, DVDs, VHS, livros e aparelhos de som, onde uso também as redes sociais e
               sites de compra e vendas para expandir e impulsionar minhas vendas.<br/><br/>
            </History>
          </Content>
      </Wraper>
  )
}

