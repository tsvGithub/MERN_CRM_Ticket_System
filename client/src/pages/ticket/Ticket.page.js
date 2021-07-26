import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tickets from "../../assets/data/dummy-tickets.json";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import MessageHistory from "../../components/message-history/MessageHistory.component";
import UpdateTicket from "../../components/update-ticket/UpdateTicket.component";

// const ticket = tickets[0];

const Ticket = () => {
  const { tId } = useParams();
  //state:
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  //refresh page
  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);
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

      {ticket.history && <MessageHistory msg={ticket.history} />}
      <UpdateTicket msg={message} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Ticket;
