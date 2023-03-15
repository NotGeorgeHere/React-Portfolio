import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;