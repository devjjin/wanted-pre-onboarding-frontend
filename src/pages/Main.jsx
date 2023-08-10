import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToSignIn = () => {
    navigate('/signin');
  };

  return (
    <div>
      <h2>My TodoList</h2>
      <div>
        <button type="button" onClick={goToSignUp}>
          회원가입
        </button>
        <button type="button" onClick={goToSignIn}>
          로그인
        </button>
      </div>
    </div>
  );
}
