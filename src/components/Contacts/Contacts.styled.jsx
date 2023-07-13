import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: stretch;
  row-gap: 10px;
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

export const ContactsUl = styled.ul`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 0 30px;
  row-gap: 10px;
  list-style: none;
`;

export const InputFilterContacts = styled.input`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 5px;
  outline: none;
  margin-bottom: 15px;
  &:focus {
    border: 1px solid #0c0;
  }
`;

export const ListContact = styled.li`
  display: grid;
  grid-template-columns: 1fr 70px;
  min-width: 400px;
  column-gap: 20px;
  align-items: center;
  list-style-type: none;
  font-weight: bold;
  float: left;
  padding: 8px;
  border-bottom: 2px solid #ddd;
`;

export const Contact = styled.div`
  display: grid;
  row-gap: 10px;
`;

export const NameContact = styled.h2`
  margin: 0;
  font-size: 18px;
  font-style: italic;
`;

export const EmailContact = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: italic;
`;

export const PhoneContact = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: italic;
`;

export const ButtonDelete = styled.button`
  justify-self: center;
  border: none;
  cursor: pointer;
  padding: 8px 10px 8px 10px;
  background: #e37266;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
`;
