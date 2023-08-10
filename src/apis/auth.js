import instance from './instance';

const postSignUpAPI = (email, password) => {
  return instance.post('/auth/signup', { email, password });
};

export default postSignUpAPI;
