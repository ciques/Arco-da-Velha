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
`;

export const Utility = styled.div`
  color: #808080;
  display: flex;
  margin: auto 20px;
`;

export const SubHeader = styled.div`
  color: #FFF;
  height: 100%;
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  background-color: #808080;
`;

export const Wraper = styled.div`
  color: #808080;
  height: 100%;
  width: 100%;
  margin: -8px;
  padding: 10px;
`;

export const Logo = styled.img`
    width: 80px;
    height: 80px;
    border: solid 1px;
    cursor: pointer;
`

export const Itens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 900px;
    margin: auto 0;
`

export const HeaderItens = styled.div`
  color: inherit;
  font-size: 1.5em;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 17px;
    padding: 5px;
    width: 33%;
    text-align: center;
    border: solid 1px black;
  }
`