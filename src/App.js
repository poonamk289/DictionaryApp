// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dictionary from './Components/Dictionary';

const App = () => {
  return (
    <Provider store={store}>
      <div >
        <Dictionary />
      </div>
    </Provider>
  );
};

export default App;
