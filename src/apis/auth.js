import instance from './instance';

const postSignUpAPI = (email, password) => {
  return instance.post('/auth/signup', { email, password });
};

export const postSigninAPI = (email, password) => {
  return instance.post('/auth/signin', { email, password });
};

export default postSignUpAPI;
