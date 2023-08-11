## 원티드 프리온보딩 인턴십 프론트엔드 사전 과제

- 지원자 : 김수진
- 프로젝트 기간 : 2023.08.10 ~ 2023.08.11
- [📕 배포링크로 이동](https://wanted-pre-onboarding-frontend-devjjin.vercel.app/)

## 1. 테스트 계정
test34@naver.com / 123123123

## 2. 기능 소개
- 회원가입, 로그인 기능
  - 이메일, 비밀번호 유효성 검사(이메일 : @포함, 비밀번호 : 8자 이상)
  - 응답받은 JWT 로컬스토리지에 저장

- todo리스트 기능
  - todo 조회, 추가, 수정, 삭제 기능
  - 완료여부 체크 기능

## 3.프로젝트 세팅 & 실행 방법

1. git clone
```
$ git clone https://github.com/devjjin/wanted-pre-onboarding-frontend.git
```

2. root 경로에 .env 추가
```
REACT_APP_API_URL=https://www.pre-onboarding-selection-task.shop
```

3. 프로젝트 패키지 설치
```
yarn install
```

4. 프로젝트 실행
```
yarn start
```
## 사용 라이브러리
<p>
  React, React-router-dom, axios, react-icons, styled-components
</p>
