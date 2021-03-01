// server side redux file
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import rootReducer from './../client/Store/reducers/index';

import { createLogger } from 'redux-logger';
const logger = createLogger();

const CreateStore = (req) => {
  const serverAxiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }, // important -- we may need to handle 'cookie', if there is some difference in casing -- like 'Cookie' or so
  });
  //? server side proxy instance is not gonna go into the proxy setup in index.tsx
  //? we have to provide full route
  //? in our micro-services and k8s -- i can apply ingress-service route here

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware.withExtraArgument(serverAxiosInstance))
    ) // add (thunkMiddleware , logger ) if wish -- logger
  );

  return store;
}; // that's how we use store on the server side

export default CreateStore;
