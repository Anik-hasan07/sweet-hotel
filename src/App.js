import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
     
          <Routes>
     
                <Route path="/" element={<Home/>} />
                <Route path="/search" element={<SearchPage/>} />
          
        
         </Routes>
      <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
// 1:41:14