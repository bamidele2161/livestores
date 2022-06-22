import React, { useReducer } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import { AnimatePresence } from 'framer-motion'
import { StateContext } from './context/stateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';


function App() {

  return (
    <AnimatePresence exitBeforeEnter>

      <StateContext.Provider value={useReducer(reducer, initialState)}>
        <Header />
        <Home />
  </StateContext.Provider>
    </AnimatePresence>
  );
}

export default App;
