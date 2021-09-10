import React from 'react';
import { Route } from 'react-router';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </>
  );
}

export default App;
