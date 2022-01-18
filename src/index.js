import React from 'react';
import ReactDOM from 'react-dom';
//component file
import TodoContainer from './components/TodoContainer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotMatch from './pages/NotMatch';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<TodoContainer />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotMatch />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);