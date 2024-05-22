import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import reduxStore from './configs/init.redux';
import App from '~/App';

const { store, persist } = reduxStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persist} loading={null}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode>   */}
    </PersistGate>
  </Provider>
);

