import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import store from './app/store';
import App from './containers/App';


import './index.css';
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
