import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const TicketTable = ({ tickets }) => {
  let todaysDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();

  console.log(tickets);
  return (
    <table>
      <caption>{todaysDate} CRM Tickets Report </caption>
      <thead>
        <tr>
          <th></th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              {/* <td>{row.subject}</td> */}
              <td>
                <Link to={`/ticket/${row.id}`}>{row.subject}</Link>{" "}
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan="4"></td>
            No tickets found...
          </tr>
        )}
      </tbody>
    </table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
export default TicketTable;
