import styled from 'styled-components';

export const Wraper = styled.div`
  justify-content: center;
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

  @media (max-width: 420px) {
    max-width: 250px;
  }
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
export const QuestionInput = styled.textarea`
  width: 80%;
  margin-right: 30px;
  font-size: 25px;
`

export const ProductArea = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media (max-width: 420px) {
    display: block;
  }
`

export const Published = styled.div`
  margin: 40px 0;
  font-size: 25px;
`

export const Comments = styled.div`

`

export const ProductButton = styled.div`
  margin-top: 25px;
  font-size: 12px;
`

export const ButtonText = styled.a`
  border-radius: 5px;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .02em;
  line-height: 19px;
  padding: 15px 24px;
  background-color: #01e675;
  color: #fff!important;
  text-decoration: none
  `