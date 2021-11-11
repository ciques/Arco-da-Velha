import styled from 'styled-components'

export const Main = styled.div`
  color: #808080;
  min-height: 80px;
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 900px;
  justify-content: space-between;
  font-size: 20px;
  padding: 20px 20px 0;
  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Utility = styled.div`
  color: #FFF;

  & > p {
    margin: 0;
    color: white;

    & > a {
      text-decoration: none;
      color: black;
    }
  }
`;

export const SubHeader = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  border-bottom: solid 1px;
`;

export const Wraper = styled.div`
  color: #FFF;
  height: 100%;
  width: 100%;
  background: #7c4a73;
`;

export const Logo = styled.img`
    height: 80px;
    max-width: 100%
    max-height: 100%
    border: solid 1px;
`

export const Itens = styled.div`
    display: flex;
    justify-content: space-around;
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
    background-color: #552b4d
  }

  @media (max-width: 700px) {
    display: ${props => props.removable ? "none" : 'block'};
  }
`

export const Dopdown = styled.div`
  
`