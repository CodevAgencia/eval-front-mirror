import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAppProviders from './withAppProviders';
import useLogin from './hooks/useLogin';
import GeneralData from './pages/GeneralData';
import PageNotFound from './pages/PageNotFound';
import TeamData from './pages/TeamData';
import IdeaBusinessModel from './pages/IdeaBusinessModel';
import ProductMarket from './pages/ProductMarket';
import Market from './pages/Market';
import Login from './pages/Login';

function App() {
  const { isLoggedIn } = useLogin();
  return (
    <div
      className={`mx-auto ${isLoggedIn ? 'mb-8' : 'mb-0'}`}
      style={{ width: isLoggedIn ? '90%' : '100%' }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/general">
            <GeneralData />
          </Route>
          <Route exact path="/team-data">
            <TeamData />
          </Route>
          <Route exact path="/business-model">
            <IdeaBusinessModel />
          </Route>
          <Route exact path="/product-market">
            <ProductMarket />
          </Route>
          <Route exact path="/market">
            <Market />
          </Route>
          <Route exact path="/market">
            <Market />
          </Route>
          <Route
            path="*"
            render={() => {
              return <PageNotFound />;
            }}
            exact={false}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default withAppProviders(App)();
