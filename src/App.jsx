import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import EventsListingPage from "./pages/EventsListingPage";
import EventRegistrationPage from "./pages/EventRegistrationPage";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventsListingPage />} />
            <Route path="/register" element={<EventRegistrationPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Router>
  );
}

export default App;
