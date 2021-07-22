import React, { useState, useEffect } from "react";

import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.component";

import { dataValidation } from "../../utils/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFormDataError = {
  subject: false,
  issueDate: false,
  detail: false,
};

const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormDataError);

  //---------------------------------------
  //refresh the page:
  useEffect(() => {}, [formData, formDataError]);
  //---------------------------------------
  const handleChange = (e) => {
    //pull out the form:
    const { name, value } = e.target;
    //set state:
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //-------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormDataError(initialFormDataError);
    //!!!
    const isSubjectValid = await dataValidation(formData.subject);

    setFormDataError({
      ...initialFormDataError,
      subject: !isSubjectValid,
    });
    console.log(`Form submit request received ${formData}`);
  };

  //==============================
  return (
    <div className="container">
      <Breadcrumb page="New Ticket" />
      <AddTicketForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        formDataError={formDataError}
      />
    </div>
  );
};

export default AddTicket;
