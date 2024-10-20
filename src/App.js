import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import NavaBar from "./Components/NavaBar/NavaBar";
import NurserySlider from "./Components/NurserySlider/NurserySlider";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton'
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton'
import Home from "./Components/Home/Home";
import ThankYou from "./Components/ThankYou/ThankYou";

function App() {
  return (
    <div >
      <BrowserRouter>
         <Header/>
         <NavaBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/ThankYou" element={<ThankYou/>}/>
          </Routes>
         <Footer/>
         <WhatsAppButton/>
         <ScrollToTopButton/>
         </BrowserRouter>
    </div>
  );
}

export default App;
