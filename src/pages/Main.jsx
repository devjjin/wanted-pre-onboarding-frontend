import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Main() {
  const navigate = useNavigate();

  const goPath = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <h2>My TodoList</h2>
      <ButtonWrap>
        <SignUpBtn type="button" onClick={() => goPath('/signup')}>
          회원가입
        </SignUpBtn>
        <SignInBtn type="button" onClick={() => goPath('/signin')}>
          로그인
        </SignInBtn>
        <Button type="button" onClick={() => goPath('/todo')}>
          todo로
        </Button>
      </ButtonWrap>
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

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border: none;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
`;

const SignUpBtn = styled(Button)`
  background-color: #e74c3c;
`;

const SignInBtn = styled(Button)`
  background-color: #2ecc71;
`;
