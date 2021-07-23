import React, { useState, useEffect } from "react";
import tickets from "../../assets/data/dummy-tickets.json";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import MessageHistory from "../../components/message-history/MessageHistory.component";
import UpdateTicket from "../../components/update-ticket/UpdateTicket.component";

const ticket = tickets[0];

const Ticket = () => {
  //state:
  const [message, setMessage] = useState("");
  //refresh page
  useEffect(() => {}, [message]);
  //-------------------
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    alert("Form submitted!");
  };

  return (
    <div className="container">
      <Breadcrumb page="Ticket" />
      <div className="wrapper">
        <div className="subject">Subject: {ticket.subject}</div>
        <div className="date">Ticket Opened: {ticket.addedAt}</div>
        <div className="status">Status: {ticket.status}</div>

        <button>Close Ticket</button>
      </div>

      <MessageHistory msg={ticket.history} />
      <UpdateTicket msg={message} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Ticket;
