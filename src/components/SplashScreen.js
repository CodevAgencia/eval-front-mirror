import { Box, CircularProgress } from '@mui/material';
import Logo from '../images/Logo-v2.png';

const SplashScreen = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center text-center space-y-12">
        <img src={Logo} alt="" className="block object-contain max-w-max w-64 md:w-1/2" />
        <p className="text-12 font-bold">Zona Innfinita</p>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </div>
    </div>
  );
};

export default SplashScreen;
