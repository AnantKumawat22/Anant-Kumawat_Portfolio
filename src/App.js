import React from 'react';
import { Route } from 'react-router';
import Home from './Home';
import Projects from './Projects';
import CoursesAndCertificate from './CoursesAndCertificate';
import ContactUs from './ContactUs';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/coursesandcertificate" component={CoursesAndCertificate} />
      <Route path="/contactus" component={ContactUs} />
    </>
  );
}

export default App;
