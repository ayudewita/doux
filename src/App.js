import React from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
