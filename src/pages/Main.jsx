import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  const goPath = (path) => {
    const goToTodo = () => {
      navigate('/todo');
    };
    if (token) {
      goToTodo();
    } else {
      navigate(path);
    }
  };

  const goTodo = () => {
    goPath('/signin');
  };

  return (
    <div>
      <h2>My TodoList</h2>
      <div>
        <button type="button" onClick={() => goPath('/signup')}>
          회원가입
        </button>
        <button type="button" onClick={() => goPath('/signin')}>
          로그인
        </button>
        <button type="button" onClick={goTodo}>
          todo로
        </button>
      </div>
    </div>
  );
}
