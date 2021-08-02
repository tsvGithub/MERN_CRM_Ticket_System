import React from "react";
import PropTypes from "prop-types";

const ResetPassword = ({ handleChange, handleReset, formSwitcher, email }) => {
  return (
    <article className="form login">
      <h1>Reset Password</h1>
      <form className="reset-form login-form" autocomplete="off" onSubmit={handleReset}>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter Email" required />

        <button type="submit">Reset password</button>
      </form>

      <a className="forgetPassword login-now" href="#!" onClick={() => formSwitcher("login")}>
        Login Now
      </a>
    </article>
  );
};

ResetPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ResetPassword;
