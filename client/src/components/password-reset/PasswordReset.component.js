import React from "react";
import PropTypes from "prop-types";

const ResetPassword = ({ handleChange, handleReset, formSwitcher, email }) => {
  return (
    <article className="form">
      <h1 className="title">Reset Password</h1>
      <form autocomplete="off" onSubmit={handleReset}>
        <div className="form-control">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter Email" required />

          <button type="submit">Reset password</button>
        </div>
      </form>

      <div>
        <a href="#!" onClick={() => formSwitcher("login")}>
          Login Now
        </a>
      </div>
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
