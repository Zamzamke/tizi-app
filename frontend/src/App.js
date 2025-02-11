import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ExerciseLog from "./pages/ExerciseLog";
import ExerciseHistory from "./components/ExerciseHistory";
import LandingPage from "./pages/LandingPage";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/exercises" element={<PrivateRoute><ExerciseLog /></PrivateRoute>} />  
        <Route path="/history" element={<PrivateRoute><ExerciseHistory /></PrivateRoute>} />
        <Route path="/" element={<LandingPage />} />  
        <Route path="/" element={<h1>Welcome to the Fitness Tracker</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
