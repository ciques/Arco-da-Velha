import styled from 'styled-components';

export const Name = styled.div`
  max-width: 30%;
  display: block;
  color: #1c2858;
  margin-left: 1rem;
  align-items: center 
`;

export const Photo = styled.div`
  display: inline-block;
  // margin: 37px 0px 37px 20px;
  // width: 40px;
  // height: 40px;
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
  justify-content: space-between;
  margin: 0 auto;
`

export const Filters = styled.div`
  display: none;
`