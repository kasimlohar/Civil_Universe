import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './Routes';
import ErrorBoundary from './components/common/ErrorBoundary';
import './styles/index.css';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
