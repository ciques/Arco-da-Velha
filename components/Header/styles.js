import styled from 'styled-components'

export const Main = styled.div`
  color: #808080;
  height: 80px;
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 900px;
  justify-content: space-between;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Utility = styled.div`
  color: #808080;
  display: flex;

  & > p {
    margin: 0;

    & > a {
      text-decoration: none;
    }
  }
`;

export const SubHeader = styled.div`
  background-color: #808080;
  color: white;
  height: 100%;
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  border-bottom: solid 1px;
`;

export const Wraper = styled.div`
  color: #808080;
  height: 100%;
  width: 100%;
  margin: -8px;
  padding: 10px;
`;

export const Logo = styled.img`
    height: 80px;
    max-width: 100%
    max-height: 100%
    border: solid 1px;
`

export const Itens = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 820px;
    margin: auto 0;
`

export const HeaderItens = styled.a`
  color: inherit;
  font-size: 20px;
  text-decoration: none;
  padding: 16px;

  &:hover {
    background-color: #c2c0c0
  }

  @media (max-width: 420px) {
    font-size: 17px;
  }
`

export const Dopdown = styled.div`
  
`