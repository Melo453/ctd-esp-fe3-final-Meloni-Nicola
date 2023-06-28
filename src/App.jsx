import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <div>
            <Router>
            <Routes>
              <Route path="/home" element={<Home/>}  />
              <Route path="/dentist/:id" element={<Detail/>}  />
              <Route path="/contact" element={<Contact/>}  />
              <Route path="/favs" element={<Favs/>}  />
            </Routes>
            </Router>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
