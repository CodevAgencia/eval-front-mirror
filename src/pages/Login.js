import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconButton, InputAdornment } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Logo from '../images/Logo-v2.png';
import { useAuth } from '../hooks/useAuth';
import { useApp } from '../hooks';
import { InputText } from '../components/Form/InputText';

const Login = () => {
  const { loading } = useApp();
  const { signInRequest } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitLogin = (form) => {
    signInRequest(form.email, form.password);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <form
        className="w-full space-y-8 mx-auto bg-gray-100 py-32 px-8 rounded-8 shadow-lg"
        style={{ width: '90%', maxWidth: '34rem' }}
        onSubmit={handleSubmit((data) => {
          handleSubmitLogin(data);
        })}
      >
        <img src={Logo} alt="logo" className="object-contain block w-44 mx-auto" />
        <h1 className="text-center font-bold text-11">Zona Innfinita</h1>
        <div className="w-full">
          <InputText
            id={0}
            errors={errors}
            title="Correo"
            type="email"
            name="email"
            control={control}
          />
        </div>

        <div className="w-full">
          <InputText
            id={2}
            errors={errors}
            title="Contraseña"
            type={showPassword ? 'text' : 'password'}
            name="password"
            control={control}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-4 px-4 rounded"
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress size={20} /> : 'Ingresar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
