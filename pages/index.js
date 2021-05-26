import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'
import styled from 'styled-components'




const Wraper = styled.div`
    background: White;
    color: #990099;
`





export default function Home() {


  return (
      <Wraper>
          <Header>
          
          </Header>
          <Content>
            COM CERTEZA É MEU PASSION OK
            <img src="./images/logo.jpg"/>
          </Content>
      </Wraper>
  )
}

