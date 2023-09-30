import React from 'react';
import Router from './router/Router';
import Provider from './redux/Provider';
import ErrorBoundary from './container/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider>
        <Router />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
