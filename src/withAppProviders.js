import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Provider from 'react-redux/es/components/Provider';
import DateFnsUtils from '@date-io/date-fns';
import AppContext from './AppContext';
import store from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => (
    <AppContext.Provider value="">
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div
            className="w-full relative h-screen grid grid-cols-1"
            style={{ gridTemplateRows: '4.4rem 1fr 180px' }}
          >
            <Header />
            <Component {...props} />
            <Footer />
          </div>
        </MuiPickersUtilsProvider>
      </Provider>
    </AppContext.Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
