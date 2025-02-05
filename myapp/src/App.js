import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<h1>Cart Page</h1>} />
        <Route path="/orders" element={<h1>My Orders</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
