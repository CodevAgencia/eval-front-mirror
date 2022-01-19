// eslint-disable-next-line import/prefer-default-export
export function validacionLogin(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Es necesario ingresar el email';
  }

  if (!values.password) {
    errors.password = 'Es necesario ingresar su contraseña';
  }

  return errors;
}
