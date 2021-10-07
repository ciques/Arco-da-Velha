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
  margin: 40px auto;  
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
  margin: 20px 0;
  width: 80%;

  & > a {
    text-decoration: none;
    color: #808080;

    &:hover {
      color: black;
    }
  }
`

export const Questions = styled.div`
  justify-content: center;
  padding: 20px 0 0;
  border-top: solid 1px;
`
export const QuestionInput = styled.input`
  width: 60%;
  margin-right: 30px;
  font-size: 25px;
`

export const ProductArea = styled.div`
  display: flex;
  margin-bottom: 40px;
`

export const Published = styled.div`
  margin: 40px 0;
  font-size: 25px;
`

