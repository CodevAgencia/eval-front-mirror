import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useHistory } from 'react-router';
import useForm from '../hooks/useForm';
import { validacionLogin } from '../utils/validations/loginValidates';
import jwtService from '../services/jwtService';
import Logo from '../images/Logo-v2.png';
import SharedTextField from '../shared-components/SharedTextField';
import SharedAutoComplete from '../shared-components';
import SharedDatePicker from '../shared-components/SharedDatePicker';

const initialData = {
  email: '',
  password: '',
};

const typeQuestion = {
  Text: (args) => {
    console.log(args);
    return <SharedTextField {...args} />;
  },
  Lista: (args) => {
    console.log(args);
    return <SharedAutoComplete {...args} />;
  },
  Fecha: (args) => {
    console.log(args);
    return <SharedDatePicker {...args} />;
  },
};

const Login = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState(initialData);

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
    jwtService.setSession('token');
    history.push('/general');
    history.go(0);
  };

  const hangleChangeGeneral = (event, value, keyData) => {
    setData({
      ...data,
      [keyData]: value?.label ? value?.label : value?.value,
    });
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
        <img src={Logo} alt="logo" className="object-contain block w-44 mx-auto" />
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
            id="identifi-id"
            label="tests"
            // error={!!errors.name}
            // helperText={errors.name?.message}
            name="test"
            size="small"
            type="text"
            value=""
            variant="outlined"
            className="w-1/2"
            placeholder="hola mundo"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
          <TextField
            id="identifi-id"
            label="tests"
            // error={!!errors.name}
            // helperText={errors.name?.message}
            name="test"
            size="small"
            type="text"
            value=""
            variant="outlined"
            className="w-1/2"
            placeholder="hola mundo"
            onChange={(event) => {
              console.log(event.target.value);
            }}
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
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div>
          <button
            type="button"
            className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-4 px-4 rounded"
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
