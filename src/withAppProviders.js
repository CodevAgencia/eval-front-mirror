import Provider from 'react-redux/es/components/Provider';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import esLocal from 'date-fns/locale/es';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppContext from './AppContext';
import store from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppMessage from './components/AppMessage';
import jwtService from './services/jwtService';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
  },
});

const withAppProviders = (Component) => (props) => {
  const isAtuhorized = jwtService.getAccessToken();

  const WrapperComponent = () => (
    <AppContext.Provider value={{ isAtuhorized }}>
      <Provider store={store}>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
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
        {/* </MuiPickersUtilsProvider> */}
      </Provider>
    </AppContext.Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
