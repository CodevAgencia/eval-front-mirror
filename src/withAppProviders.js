import { Provider } from 'react-redux';
import esLocal from 'date-fns/locale/es';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { configureStore } from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppMessage from './components/AppMessage';

const store = configureStore();

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
  },
});

export const WithAppProviders = (Component) => (props) => {
  const WrapperComponent = () => (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocal}>
          <div
            className="w-full relative h-screen grid grid-cols-1"
            style={{ gridTemplateRows: '4.4rem 1fr 180px' }}
          >
            <Header />
            <Component {...props} />
            <Footer />
            <AppMessage />
          </div>
        </LocalizationProvider>
      </MuiThemeProvider>
    </Provider>
  );

  return WrapperComponent;
};
