import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage  = () => {
    const navigate = useNavigate();
    const goHomePage = () => {
        navigate("/");
    }
  return (
    <div class="box">
      <form>
        <span class="text-center">PAGE NOT FOUND</span>
        <button type="button" class="btn" onClick={goHomePage}> CHANGE TO HOME PAGE </button> 
      </form>
    </div>
  );
}

export default ErrorPage;
