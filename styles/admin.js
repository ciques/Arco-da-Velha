import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 0 auto;
  justify-content: center;
  color: #808080;
  background-color: #f1eafd;
  min-height: 100vh;
  overflow-x: hidden;  
`

export const MenuBox = styled.div`
  margin: 70px auto;
  border: solid 2px #808080;
  border-radius: 10px;
  padding: 10px;
  max-width: 600px;
  text-align: center;
  box-sizing: border-box; 

  @media (max-width: 800px) {
    max-width: 100%;
    font-size: 15px;
  }

  & > img {
    max-height: 200px;
    max-width: 270px;
  }
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
  color: #808080;

  & > p {
    margin: 0 0 10px;
    font-size: 25px;

    @media (max-width: 900px) {
      font-size: 15px;
    }
  }

  & > input {
    margin-bottom: 10px;
    font-size: 20px;
    border-radius: 5px;
    border: solid 1px #808080;
    max-width: 95%;
    box-sizing: border-box;

    @media (max-width: 900px) {
      font-size: 15px;
      margin-bottom: 0;
    }
  }
`

export const Select = styled.select`
  margin-bottom: 10px;
  font-size: 20px;
  border-radius: 5px;
  border: solid 1px #808080;
  max-width: 95%;
  box-sizing: border-box;
  width: 95%;

  @media (max-width: 900px) {
    font-size: 15px;
    margin-bottom: 0;
  }

  & > option{
    font-size: 20px;
  }
`

export const ProductField = styled.div`
  display: flex;
  word-break: break-word;

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
  width: 220px;
  margin: 20px;
  background-color: white;


  @media (max-width: 800px) {
    font-size: 15px;
    margin: 2.5%;
    width: 150px;
    box-sizing: border-box;
  }

  & > img {
    width: 220px;
    height: 220px;

    @media (max-width: 800px) {
      width: 125px;
      height: 125px;

    }
  }
  
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%
  }
`