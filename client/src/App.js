import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./app.scss"

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Routes>
          
            <Route path="/" element={<Home />} />

      
    
      </Routes>
    </div>
    {/* <ToastContainer /> */}
  </Router>
  );
}

export default App;
