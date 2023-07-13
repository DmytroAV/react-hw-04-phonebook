import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: stretch;
  gap: 10px;
  padding: 15px;
  max-width: 100%;
  background-color: #f8f8f8;
  border: 2px solid #c2c2c2;
  border-radius: 3px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  font-weight: bold;
  font-style: italic;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
  font-size: 18px;
  padding-left: 40px;
  padding-bottom: 5px;
`;

export const ContainerForm = styled.form`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 20px 12px 10px 20px;
  gap: 30px;
`;

export const LabelInput = styled.label`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  font-weight: bold;
  font-style: italic;
`;

export const InputField = styled.input`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  max-width: 300px;
  &:focus {
    border: ${props => props.$mode && '1px solid red'};
  }
  text-transform: ${props => props.$capitalize && 'capitalize'};
`;

export const BtnAddContacts = styled.button`
  justify-self: self-end;
  border: none;
  cursor: pointer;
  padding: 8px 15px 8px 15px;
  background: #ff8500;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  margin: 10px 10px 0 0;
  width: 100%;
  text-transform: uppercase;
  :hover {
    background: #ea7b00;
    color: #fff;
  }
`;
