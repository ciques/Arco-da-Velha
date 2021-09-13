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
  max-width: 1220px;
  justify-content: center;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Utility = styled.div`
  color: #808080;
  display: flex;
`;

export const SubHeader = styled.div`
  color: #808080;
  height: 100%;
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  border-bottom: solid 1px;
  padding-bottom: 5px;
`;

export const Wraper = styled.div`
  color: #808080;
  height: 100%;
  width: 100%;
  margin: -8px;
`;

export const Logo = styled.img`
    height: 80px;
    max-width: 100%
    max-height: 100%
    border: solid 1px;
`

export const Itens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    max-width: 700px;
    margin: auto 0;
`

export const HeaderItens = styled.a`
  color: inherit;
  font-size: 1.5em;
  text-decoration: none;

  @media (max-width: 420px) {
    font-size: 17px;
  }
`