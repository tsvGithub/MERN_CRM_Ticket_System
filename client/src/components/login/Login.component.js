import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ handleChange, handleSubmit, formSwitcher, email, password }) => {
  return (
    <article className="login form">
      <h1>Client Login</h1>
      <form className="login-form" autocomplete="off" handleSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter Email" required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter Password"
          required
        />

        <button type="submit">Login</button>
      </form>

      <a href="#!" className="forgetPassword" onClick={() => formSwitcher("reset")}>
        Forgot password?
      </a>
    </article>
  );
};

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
