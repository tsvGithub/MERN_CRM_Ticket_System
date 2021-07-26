import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import SearchForm from "../../components/search-form/SearcForm.component";
import TicketTable from "../../components/ticket-table/TicketTable.component";

import tickets from "../../assets/data/dummy-tickets.json";

const TicketLists = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);
  //========================
  useEffect(() => {}, [str, displayTicket]);
  //----------------------------------------------------------------
  const handleChange = (e) => {
    const { value } = e.target;

    setStr(value);
    searchTicket(value);
  };
  //----------------------------------------------------------------
  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase()));
    setDisplayTicket(displayTickets);
  };
  return (
    <div className="container">
      <Breadcrumb page="Ticket Lists" />
      <Link to="/add-ticket">
        <button className="btn">Add New Ticket</button>
      </Link>
      <SearchForm handleChange={handleChange} str={str} />

      <hr />

      <TicketTable tickets={displayTicket} />
    </div>
  );
};

export default TicketLists;
