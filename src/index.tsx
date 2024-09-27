import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa da 'react-dom/client' per React 18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
