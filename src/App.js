import Home from './components/Home';
import Choose from './components/Choose';
import About from './components/About';
import Products from './components/Products';
import Download from './components/Download';
import Footer from './components/Footer';
import Aboutusmain from './components/Aboutusmain';
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<><Home/><Choose/><About/><Products/><Download/><Footer/></>} />
      <Route path='/aboutus' element={<><Aboutusmain/><Footer/></>} />
    </Routes>
    </>
  );
}

export default App;
