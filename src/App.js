import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Loader from './components/Loader/Loader';
import ScrollToTop from "./utils/ScrollToTop"
import { MainPage } from './pages';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  
      
    </div>
  );
}

export default App;
