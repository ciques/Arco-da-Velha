import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'
import { Wraper, Featured } from '../styles/index';
import styled from 'styled-components'







export default function Home() {


  return (
      <Wraper>
          <Header logo="./images/logo.jpg"/>
          <Content>            
            <Featured>
              Produtos em destaque
            </Featured>
          </Content>
      </Wraper>
  )
}

