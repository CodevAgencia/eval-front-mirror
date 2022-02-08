import Alert from '@mui/material/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { useApp } from '../hooks';

function AppMessage() {
  const { isOpen, message, type, hideMessage } = useApp();

  const RenderAlert = (
    <Alert onClose={hideMessage} severity={type} sx={{ width: '100%' }}>
      {message}
    </Alert>
  );

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={hideMessage}>
      {RenderAlert}
    </Snackbar>
  );
}

export default AppMessage;
