import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tickets from "../../assets/data/dummy-tickets.json";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import MessageHistory from "../../components/message-history/MessageHistory.component";
import UpdateTicket from "../../components/update-ticket/UpdateTicket.component";

// const ticket = tickets[0];

const Ticket = () => {
  const { tId } = useParams();
  console.log(tickets, tId);

  //state:
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  //refresh page
  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);
  // console.log(ticket);
  //-------------------
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    alert("Form submitted!");
  };

  return (
    <main>
      <Breadcrumb page="Ticket" />
      <article className="ticket-status ticket">
        <div className="subject">Subject: {ticket.subject}</div>
        <div className="date">Ticket Opened: {ticket.addedAt}</div>
        <div className="status">Status: {ticket.status}</div>

        <button title="Close Ticket ">✖</button>
      </article>

      <article className="message-history">{ticket.history && <MessageHistory msg={ticket.history} />}</article>

      <UpdateTicket msg={message} handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
  );
};

export default Ticket;
