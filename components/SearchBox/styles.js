import styled from 'styled-components';

export const Search = styled.div`
  width: 445px;
  height: 50px;
  background-color: white;
  border-radius: 22px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);

  @media (max-width: 900px) {
    width: 250px;
  }
`;

export const Input = styled.input`
  background-color: white
  border-radius: 12px;
  width: 80%;
  border: none;
  height: 70%;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
`;

export const Button = styled.button`
  border: none;
  color: #a0a0a0;
  background-color: white;
  cursor: pointer;
  margin-right: 10px;
`;

export const FilterButton = styled.button`
  border-radius: 12px;
  background-color: #DB184D;
  color: #FFFFFF;
  height: 45px;
  width: 10%;
  border: none;
  margin-top: 84px;
  font-size: 18px;
  margin-left: 30px;
  margin-right: 30px;
`
