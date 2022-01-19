import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [values, setValues] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            // error={!!errors.name}
            // helperText={errors.name?.message}
            name="email"
            type="email"
            value={values.email}
            variant="outlined"
            className="w-full"
            placeholder="email..."
            onChange={handleChange('email')}
          />
        </div>

        <FormControl className="w-full" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            className="w-full"
            endAdornment={
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
            }
            label="Password"
          />
        </FormControl>

        <div>
          <button
            type="button"
            className="w-full bg-teal-300 hover:bg-teal-500 text-white font-bold py-4 px-4 rounded"
            onClick={() => {
              console.log({ values });
            }}
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
