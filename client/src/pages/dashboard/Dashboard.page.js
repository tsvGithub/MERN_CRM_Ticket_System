import React from "react";
import { Link } from "react-router-dom";

import TicketTable from "../../components/ticket-table/TicketTable.component";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import tickets from "../../assets/data/dummy-tickets.json";

const Dashboard = () => {
  //   console.log(Dashboard);
  return (
    <main>
      <Breadcrumb page="Dashboard" />

      <article className="ticket-status">
        <div>
          <p>Total tickets: 50</p>
          <p>Pending tickets: 10</p>
          <p>Recently Added tickets: 10</p>
        </div>

        <Link to="/add-ticket">
          <button>Add New Ticket</button>
        </Link>
      </article>

      <TicketTable tickets={tickets} />
    </main>
  );
};

export default Dashboard;
