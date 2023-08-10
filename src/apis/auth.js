import instance from './instance';

export const postSignUpAPI = (email, password) => {
  return instance.post('/auth/signup', { email, password });
};

export const postSigninAPI = (email, password) => {
  return instance.post('/auth/signin', { email, password });
};
