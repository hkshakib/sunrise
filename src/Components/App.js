import '../Styles/App.css'
import Home from "./Home.jsx";
import Shop from "./Shop";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={ <Shop /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
