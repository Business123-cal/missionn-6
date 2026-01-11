import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Auth from "./pages/Auth";

function App() {
  const location = useLocation();

  // tampilkan navbar auth
  const showNavbar = location.pathname === "/auth";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </>
  );
}

export default App;

