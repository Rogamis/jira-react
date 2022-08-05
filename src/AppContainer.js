import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./routerComponent/loginPage";
import RegistrationsPage from "./routerComponent/registrationsPage";
import "./App.css";
import HomePage from "./routerComponent/homePage";
import ErrorPage from "./routerComponent/errorPage";
import UserPage from "./routerComponent/userPage";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const access_token = useSelector((state) => state.token.access_token)

  if(!access_token){
    return <Navigate to="/login" />
  }

  return props.children
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationsPage />} />
        <Route path="/user" element={<PrivateRoute> <UserPage/> </PrivateRoute>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
