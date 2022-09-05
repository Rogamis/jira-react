import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css";

function HomePage() {

  const navigateToLogin = useNavigate();
  const goLoginPage = () => {
    navigateToLogin("/login");
  };

  const navigateToRegistration = useNavigate();
  const goRegistrationPage = () => {
    navigateToRegistration("/registration");
  };

  return (
    <div class="box">
      <form>
        <span class="text-center">WELCOME JIRA-PET-REACT</span>
        <button type="button" className="btn" onClick={goLoginPage}>
          login
        </button>
        <button type="button" className="btn" onClick={goRegistrationPage}>
          Registration
        </button>
      </form>
    </div>
  );
}

export default HomePage