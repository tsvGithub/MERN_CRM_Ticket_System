import React from "react";
import { Link } from "react-router-dom";

import TicketTable from "../../components/ticket-table/TicketTable.component";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import tickets from "../../assets/data/dummy-tickets.json";

const Dashboard = () => {
  //   console.log(Dashboard);
  return (
    <section>
      <Breadcrumb page="Dashboard" />
      <Link to="/add-ticket">
        <button>Add New Ticket</button>
      </Link>
      <article>
        <div>Total tickets: 50</div>
        <div>Pending tickets: 10</div>
        <div>Recently Added tickets: 10</div>
        <hr />

        <TicketTable tickets={tickets} />
      </article>
    </section>
  );
};

export default Dashboard;
