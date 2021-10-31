import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 20px auto;
  justify-content: center;
  padding: 10px;
  max-width: 400px;
  color: #808080;  
`

export const LoginBox = styled.div`
  margin: auto;
  border: solid 2px #808080;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px;
  text-align: center; 
`

export const Title = styled.div`
  font-size: 30px;  
  margin-bottom: 20px;
  text-align: center;
`

export const LoginButton = styled.div`
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

  & > p {
    margin: 0 0 10px;
    font-size: 25px;
  }

  & > input {
    margin: 0 0 10px;
    font-size: 20px;
  }
`