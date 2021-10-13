import styled from 'styled-components';

export const Wraper = styled.div`
    background: #f1eafd;
    color: #808080;
`

export const Featured = styled.div`
    font-size: 40px;
    color: #552b4d;
    text-align: center;
    padding: 20px;
`

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 244px);
  justify-content: space-evenly;
  grid-gap: 20px;
`

export const ProductCard = styled.div`
  padding: 10px;
  border: solid 2px #552b4d;
  border-radius: 10px;
  color: #552b4d;
  width: 220px;
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;
  background-color: white;
`;

export const ProductField = styled.div`
  display: flex;
  word-break: break-word;
  margin: 5px;
  font-size: 20px;

  & > p {
    margin: 0 0 10px;
  }

  @media (max-width: 420px) {
    font-size: 15px;
  }
`

export const ProductPhoto = styled.div`
    width: 220px;
    height: 220px;
`;


