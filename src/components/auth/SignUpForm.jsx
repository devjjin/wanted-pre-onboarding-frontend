import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postSignUpAPI from '../../apis/auth';

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
        navigate('/signin');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">
          이메일
          <input
            id="email"
            data-testid="email-input"
            type="email"
            value={email}
            placeholder="이메일 주소 (예: test@gmail.com)"
            onChange={onChangeHandler}
          />
        </label>
        {!isEmailValid && email !== '' && <p>올바른 이메일을 입력하세요.</p>}
        <label htmlFor="password">
          비밀번호
          <input
            id="password"
            data-testid="password-input"
            type="password"
            value={password}
            placeholder="비밀번호 (8자 이상)"
            onChange={onChangeHandler}
          />
          {!isPasswordValid && password !== '' && (
            <p>유효한 비밀번호를 입력하세요.</p>
          )}
        </label>
        <button
          type="submit"
          data-testid="signup-button"
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
