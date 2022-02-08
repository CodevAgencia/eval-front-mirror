import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';

import { useAuth } from './hooks/useAuth';
import { runSagas, history } from './store';
import SplashScreen from './components/SplashScreen';
import { WithAppProviders } from './withAppProviders';

const Login = lazy(() => import('./pages/Login'));
const FormPage = lazy(() => import('./pages/FormPage'));

function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    runSagas();
  }, []);

  return (
    <Suspense fallback={SplashScreen}>
      <div
        className={`mx-auto ${loggedIn ? 'my-8' : 'mb-0'}`}
        style={{ width: loggedIn ? '90%' : '100%' }}
      >
        <Router history={history}>
          <Switch>
            {loggedIn ? (
              <>
                <Route exact={false} path="/formulario/:groupName" component={FormPage} />
              </>
            ) : (
              <>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </>
            )}
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default WithAppProviders(App)();
