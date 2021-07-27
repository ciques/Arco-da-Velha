import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 20px auto;
  justify-content: center;
  padding: 10px;
  color: #990099;  
`

export const MenuBox = styled.div`
  margin: 70px auto;
  border: solid 2px #990099;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px;
  text-align: center; 
`

export const MenuButton = styled.div`
  background-color: #990099;
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
    border: solid 1px #990099;
  }
`

export const ProductField = styled.div`
  width: 25%;
  display: flex;

  & > p {
    margin: 0 0 10px;
  }
`

export const ProductHeader = styled.div`
  display: flex;
`

export const SelectType = styled.select`
  margin: 0 0 10px;
  font-size: 20px;
  color: #990099;
`

export const OptionType = styled.option`

`
