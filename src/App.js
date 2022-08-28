import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop"
import { MainPage } from './pages';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
