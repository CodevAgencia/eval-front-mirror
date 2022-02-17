import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';

import { useAuth } from './hooks/useAuth';
import { runSagas, history } from './store';
import SplashScreen from './components/SplashScreen';
import { WithAppProviders } from './withAppProviders';

const Login = lazy(() => import('./pages/Login'));
const TeamPage = lazy(() => import('./pages/Team'));
const FormPage = lazy(() => import('./pages/FormPage'));
const Results = lazy(() => import('./pages/Results'));

function App() {
  const { loggedIn, loadTokenSave } = useAuth();

  useEffect(() => {
    runSagas();
    loadTokenSave();
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
                <Route exact path="/equipo" component={TeamPage} />
                <Route exact={false} path="/formulario/:groupName" component={FormPage} />
                <Route exact path="/resultados" component={Results} />
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
