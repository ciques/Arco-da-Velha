import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'
import styled from 'styled-components'




const Wraper = styled.div`
    background: White;
    color: #808080;
`





export default function Home() {


  return (
      <Wraper>
          <Header logo="./images/logo.jpg">
          
          </Header>
          <Content>
            <img  src="./images/logo2.jpg"/>
          </Content>
      </Wraper>
  )
}

