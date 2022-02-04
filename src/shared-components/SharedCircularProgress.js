import { Box, CircularProgress } from '@mui/material';

const SharedCircularProgress = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center text-center space-y-12">
        <Box sx={{ display: 'flex' }}>
          <CircularProgress size="4rem" style={{ color: '#26C6DA' }} />
        </Box>
      </div>
    </div>
  );
};

export default SharedCircularProgress;
