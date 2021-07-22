import React from "react";

import PropTypes from "prop-types";

const AddTicketForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div className="container">
      <h1>Add New Ticket</h1>
      <form autocomplete="off" onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject</label>
        <input
          // type="text"
          name="subject"
          value={formData.subject}
          //minLength="3"
          maxLength="100"
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <div className="text-danger">{formData.subject && "Subject is required!"}</div>

        <label htmlFor="issueDate">Issue Foundation</label>
        <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} required />

        <label htmlFor="detail">Detail</label>
        <input type="textarea" name="detail" row="5" value={formData.detail} onChange={handleChange} required />
      </form>
      <button type="submit">Send</button>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default AddTicketForm;
