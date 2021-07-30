import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ handleChange, handleSubmit, formSwitcher, email, password }) => {
  return (
    <article className="login">
      <h1>Client Login</h1>
      <form className="login-form" autocomplete="off" handleSubmit={handleSubmit}>
        <div className="form-control">
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
        </div>
      </form>

      <div>
        <a href="#!" onClick={() => formSwitcher("reset")}>
          Forgot password?
        </a>
      </div>
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
