import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Provider from 'react-redux/es/components/Provider';
import DateFnsUtils from '@date-io/date-fns';
import AppContext from './AppContext';
import store from './store';

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => (
    <AppContext.Provider value="">
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Component {...props} />
        </MuiPickersUtilsProvider>
      </Provider>
    </AppContext.Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
