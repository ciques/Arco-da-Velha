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
  margin: 37px 0px 37px 20px;
  width: 40px;
  height: 40px;
  position: relative;
  
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 0.5rem rgba(50, 50, 50, 0.3);
  background-image: ${({ photo }) => `url(${photo})`};
`;

export const ProductCard = styled.div`
  margin: 10px 10px 0 0;  
  border: solid 2px #990099;
  border-radius: 10px;
  color: #990099;
  max-width: 45%;
`;