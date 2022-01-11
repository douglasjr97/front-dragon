import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { Login } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
