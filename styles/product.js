import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 20px auto;
  justify-content: center;
  padding: 10px;
  color: #808080;  
`

export const Content = styled.div`
  justify-content: center;
  max-width: 80%;
  display: flex;
  margin: 20px auto;
`

export const Photo = styled.img`
  justify-content: center;
  max-width: 450px;
`

export const ProductInfo = styled.div`
  justify-content: center;
  margin-left: 20px;

`

export const LinkBar = styled.div`
  font-size: 20px;
  margin: 20px auto;
  width: 80%;

  & > a {
    text-decoration: none;
  }
`
