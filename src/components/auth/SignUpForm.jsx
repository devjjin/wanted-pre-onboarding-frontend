import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { postSignUpAPI } from '../../apis/auth';

export default function SignForm() {
  const navigate = useNavigate();
  const initialValue = { email: '', password: '' };
  const [auth, setAuth] = useState(initialValue);
  const { email, password } = auth;

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setAuth((prevAuth) => ({
      ...prevAuth,
      [id]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postSignUpAPI(email, password)
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <h3>회원가입</h3>
        <label htmlFor="email">
          이메일
          <Input
            id="email"
            data-testid="email-input"
            type="email"
            value={email}
            placeholder="이메일 주소 (예: test@gmail.com)"
            onChange={onChangeHandler}
            isvalid={isEmailValid ? 1 : 0}
          />
          {!isEmailValid && email !== '' && (
            <Warning>올바른 이메일을 입력하세요.</Warning>
          )}
        </label>
        <label htmlFor="password">
          비밀번호
          <Input
            id="password"
            data-testid="password-input"
            type="password"
            value={password}
            placeholder="비밀번호 (8자 이상)"
            onChange={onChangeHandler}
            isvalid={isPasswordValid ? 1 : 0}
          />
          {!isPasswordValid && password !== '' && (
            <Warning>유효한 비밀번호를 입력하세요.</Warning>
          )}
        </label>
        <SignUpBtn
          type="submit"
          data-testid="signup-button"
          disabled={!isFormValid}
        >
          회원가입
        </SignUpBtn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 280px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid ${(props) => (props.isvalid ? '#ccc' : '#e74c3c')};
  border-radius: 3px;
`;

const Warning = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 3px;
`;

const SignUpBtn = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
