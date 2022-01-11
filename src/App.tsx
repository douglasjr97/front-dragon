import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

const App: React.FC = () => {
 
  return(
    <>
    <Home/>
    
    <GlobalStyle/>
    </>
  );

}

export default App;
