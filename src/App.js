import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop"
import { MainPage } from './pages';
// import { XlviLoader } from "react-awesome-loaders";
// import React,{useState, useEffect} from 'react';
function App() {
  // const [isLoading, setLoading] = useState(true);
  //  useEffect(
  //     () =>
  //        setTimeout(() => {
  //           setLoading(false);
  //        }, 20000),
  //     []
  //  );
//    if (isLoading) {
//     return <XlviLoader
//     boxColors={["#094C83", "#094C83", "#094C83"]}
//     desktopSize={"128px"}
//     mobileSize={"100px"}
//   />;
//  }
 
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
