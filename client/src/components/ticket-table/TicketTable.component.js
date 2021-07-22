import React from "react";
import PropTypes from "prop-types";
const TicketTable = ({ tickets }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
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
              <td>{row.subject}</td>
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
