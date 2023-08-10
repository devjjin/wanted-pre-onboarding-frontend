import React from 'react';

export default function SignUpForm() {
  return (
    <div>
      <form>
        <label htmlFor="email-input">
          이메일
          <input
            id="email"
            data-testid="email-input"
            type="email"
            placeholder="이메일 주소 (예: test@gmail.com)"
          />
        </label>
        <label htmlFor="password-input">
          비밀번호
          <input
            id="password"
            data-testid="password-input"
            type="password"
            placeholder="비밀번호 (8자 이상)"
          />
        </label>
        <button type="submit" data-testid="signup-button">
          회원가입
        </button>
      </form>
    </div>
  );
}
