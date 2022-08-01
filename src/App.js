import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./routerComponent/loginPage";
import RegistrationsPage from "./routerComponent/registrationsPage";
import "./App.css";
import HomePage from "./routerComponent/homePage";
import ErrorPage from "./routerComponent/errorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
