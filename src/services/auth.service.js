import { authRepository } from '../repositories/authRepository';

export const signIn = async ({ email, password }) => {
  const response = await authRepository.signInWithEmailAndPassword(email, password);
  const { token } = response.data;
  return token;
};
