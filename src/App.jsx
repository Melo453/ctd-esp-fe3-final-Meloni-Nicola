import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import './Components/Navbar/Navbar.css';

function App() {

  const { state } = useContext(ContextGlobal);
  const theme = state?.theme || "dark";

  return (
    <Router>
      <div className={`App ${theme}`}>
          <Navbar/>
          <div className="sections">
            <Routes>
              <Route path="/" element={<Home/>}  />
              <Route path="/home" element={<Home/>}  />
              <Route path="/dentist/:id" element={<Detail/>}  />
              <Route path="/contact" element={<Contact/>}  />
              <Route path="/favs" element={<Favs/>}  />
            </Routes>
          </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
