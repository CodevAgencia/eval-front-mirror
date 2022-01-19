import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useForm from '../hooks/useForm';
import { validacionLogin } from '../utils/validations/loginValidates';

const initialData = {
  email: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { errors, form, handleChange, handleSubmit, setErrors, setForm, setInForm } = useForm(
    initialData,
    () => handleSubmitLogin(),
    validacionLogin
  );

  const handleSubmitLogin = () => {
    console.log(form);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-gray-300"
      // style={{ backgroundColor: 'rgba(178,235,242,0.3)' }}
    >
      <form
        className="w-full space-y-8 mx-auto bg-gray-100 py-32 px-8 rounded-8 shadow-lg"
        style={{ width: '90%', maxWidth: '34rem' }}
      >
        <h1 className="text-center font-bold text-11">Zona Innfinita</h1>
        <div className="w-full">
          <TextField
            id="email"
            label="Correo"
            error={!!errors.email}
            helperText={errors.email}
            name="email"
            type="email"
            value={form.email}
            variant="outlined"
            className="w-full"
            placeholder="email..."
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <TextField
            id="password"
            label="Password"
            error={!!errors.password}
            helperText={errors.password}
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            variant="outlined"
            className="w-full"
            placeholder="password..."
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div>
          <button
            type="button"
            className="w-full bg-teal-300 hover:bg-teal-500 text-white font-bold py-4 px-4 rounded"
            onClick={handleSubmit}
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
