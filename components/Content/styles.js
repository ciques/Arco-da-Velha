import styled from 'styled-components'

export const Wraper = styled.div`
  width: 100%;
  font-size: 20px;

  @media (max-width: 420px) {
    font-size: 17px;
  }
  
  & > img {
    margin: 20px auto;
    display: block;
    max-height: 500px
  }
`;

export const Title = styled.div`
  text-align: center;
`