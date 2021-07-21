import React from "react";

import TicketTable from "../../components/ticket-table/TicketTable.component";
import tickets from "../../assets/data/dummy-tickets.json";

const Dashboard = () => {
  return (
    <section>
      <button>Add New Ticket</button>
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
