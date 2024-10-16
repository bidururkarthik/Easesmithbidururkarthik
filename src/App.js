import AllContainer from "./Components/AllContainer/AllContainer";
import NavBar from "./Components/NavBar/NavBar";
import RoadMap from "./Components/RoadMap/RoadMap";
import Footer from "./Components/Footer/Footer";
import './App.css'
import Faq from "./Components/Faq/Faq";
import ExploreApp from "./Components/ExploreApp/ExploreApp";




function App() {
  return (
    <div style={{ backgroundColor: "#00161D" }}>
         <NavBar/>
         <AllContainer/>        
          <RoadMap />
           <Faq/>
           <ExploreApp/>
        <Footer/>
    </div>
  );
}

export default App;
