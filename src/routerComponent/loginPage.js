import React from "react";
import "../App.css";

function LoginPage() {
  return (
    <div class="box">
      <form>
        <span class="text-center">Registration</span>
        <div class="input-container">
          <input type="text" required="" />
          <label>Email</label>
        </div>
        <div class="input-container">
          <input type="mail" required="" />
          <label>Password</label>
        </div>
        <button type="button" class="btn">
          Registration
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
