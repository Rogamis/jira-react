import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./routerComponent/loginPage";
import RegistrationsPage from "./routerComponent/registrationsPage";
import HomePage from "./routerComponent/homePage";
import ErrorPage from "./routerComponent/errorPage";
import UserPage from "./routerComponent/userPage";
import { useSelector } from "react-redux";
import ProjectPage from "./routerComponent/components/projectPage";
import React from "react";
import "./App.css";

const PrivateRoute = (props) => {
  const access_token = useSelector((state) => state.token.access_token)

  if(!access_token){
    return <Navigate to="/login" />
  }

  return props.children
}

const UserProjectPage = (props) => {
  const access_token = useSelector((state) => state.token.access_token);

  if (!access_token) {
    return <Navigate to="/project" />;
  }

  return props.children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationsPage />} />
        <Route path="/user" element={ <PrivateRoute> <UserPage /> </PrivateRoute> } />
        <Route path="/project" element={<UserProjectPage><ProjectPage /></UserProjectPage>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
