import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 20px auto;
  justify-content: center;
  padding: 10px;
  color: #808080;  
`

export const MenuBox = styled.div`
  margin: 70px auto;
  border: solid 2px #808080;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px;
  text-align: center; 
`

export const MenuButton = styled.div`
  background-color: #808080;
  color: #FFF;
  border-radius: 5px;
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 15px;
  border: none;
  width: fit-content;
  margin: 0 auto;
`

export const Input = styled.div`
  margin: 10px 0;

  & > p {
    margin: 0 0 10px;
    font-size: 25px;
  }

  & > input {
    margin: 0 0 10px;
    font-size: 20px;
    border-radius: 5px;
    border: solid 1px #808080;
  }
`

export const ProductField = styled.div`
  display: flex;
  word-break: break-all;

  & > p {
    margin: 0 0 10px;
  }
`

export const ProductHeader = styled.div`
  display: flex;
  cursor: pointer;
`

export const SelectType = styled.select`
  margin: 0 0 10px;
  font-size: 20px;
  color: #808080;
`

export const OptionType = styled.option`

`

export const ProductCard = styled.div`
  padding: 10px;
  border: solid 2px #808080;
  border-radius: 10px;
  color: #808080;
  width: 20%;
  margin-bottom: 20px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  margin: 0 auto;
`