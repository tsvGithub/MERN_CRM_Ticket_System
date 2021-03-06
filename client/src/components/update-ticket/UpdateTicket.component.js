import React from "react";
import PropTypes from "prop-types";
const UpdateTicket = ({ msg, handleChange, handleSubmit }) => {
  return (
    <form action="" className="update-ticket" onSubmit={handleSubmit}>
      <div className="">Please reply your message here or update the ticket</div>
      <textarea name="detail" value={msg} onChange={handleChange} rows="5" />
      <button className="btn" type="submit">
        Reply
      </button>
    </form>
  );
};

UpdateTicket.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};

export default UpdateTicket;
