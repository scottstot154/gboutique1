import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CreateUserPage from "./components/pages/CreateUserPage";
import Footer from "./components/Footer";
import DetailPage from "./components/pages/DetailPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<HomePage />} />
        <Route path="/register" element={<CreateUserPage />} />
        <Route path="/collections/:name" element={<DetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
