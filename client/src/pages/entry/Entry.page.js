import React, { useState } from "react";
import "./entry.style.css";

import LoginForm from "../../components/login/Login.component";
import ResetPassword from "../../components/password-reset/PasswordReset.component";
const Entry = () => {
  //state:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  //==================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  //-----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || password) {
      return alert("Please fill up all required fields!");
    }
    //TODO: call api to submit the form
    console.log(email, password);
  };
  //-------------------------------------
  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Please enter the email address!");
    }
    //TODO: call api to submit the form
    console.log(email);
  };
  //------------------------------------
  //changes onClick from 'login' to 'reset' & vice versa
  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };
  //=========================
  //==========================
  //================================
  return (
    <div className="entry-page">
      <main className="form-box">
        {formLoad === "login" && (
          <LoginForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        )}

        {formLoad === "reset" && (
          <ResetPassword
            handleChange={handleChange}
            handleReset={handleReset}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </main>
    </div>
  );
};

export default Entry;
