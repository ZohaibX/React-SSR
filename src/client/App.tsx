import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import { fetchCurrentUser } from './Store/actions';

// any route, that is matched by matchRoutes fn, will be passed to this App
// This App component will be directly connected to every route and to the components, we use here - like header
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
//? here, we have loaded current user data into the store
//? this component is directly connected to every route and to the components, we use here - like header
//? we can use this currentUser data there without dispatching currentUser action
