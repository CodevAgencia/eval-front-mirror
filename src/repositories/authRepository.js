import { post } from './http';

// const thematicUrl = '/api/thematic';
const path = '/api/auth';
const baseUrl = process.env.REACT_APP_EMPRENDEDOR_API;

export const authRepository = {
  signInWithEmailAndPassword(email, password) {
    return post(baseUrl + path, {
      email,
      password,
    });
  },
};
