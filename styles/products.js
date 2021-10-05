import styled from 'styled-components';

export const Name = styled.div`
  max-width: 30%;
  display: block;
  color: #1c2858;
  margin-left: 1rem;
  align-items: center 
`;

export const Content = styled.div`
  display: flex;
`


export const Photo = styled.div`
  display: inline-block;
  position: relative;
  
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 0.5rem rgba(50, 50, 50, 0.3);
  background-image: ${({ photo }) => `url(${photo})`};
`;

export const ProductCard = styled.div`
  padding: 10px;
  border: solid 2px #808080;
  border-radius: 10px;
  color: #808080;
  width: 20%;
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export const ProductField = styled.div`
  display: flex;
  padding-left: 4%;
  word-break: break-all;

  & > p {
    margin: 0 0 10px;
  }

  @media (max-width: 420px) {
    font-size: 17px;
  }
`

export const ProductHeader = styled.div`
  display: flex;
`

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

export const Filters = styled.div`
  text-align: center;
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px 0 40px;

  & > p {
    margin-top: 20px;
  }
`

export const MenuCategory = styled.div`
  width: 25%;
  font-size: 35px;  
`

export const ContentProducts = styled.div`
  width: 75%;
`

export const CategoryTitle = styled.div`
  font-size: 25px;
`

export const Categoryinput = styled.a`
  font-size: 15px;
  margin-left: 20px;
  text-decoration: none;

`