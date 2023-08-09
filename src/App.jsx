import React, { useState } from 'react';
import styled from 'styled-components';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullName,
      phoneNumber,
      email
    };
    console.log(userData); // Передача данных в консоль
    alert(JSON.stringify(userData)); // Отображение данных в алерте
  };

  return (
    <FormWrapper>
      <h2>Регистрация пользователя</h2>
      <Form onSubmit={handleSubmit}>
        <label>
          ФИО:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Номер телефона:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          Email адрес:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export default RegistrationForm;
