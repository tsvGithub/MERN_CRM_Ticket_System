import React from "react";
import PropTypes from "prop-types";

const MessageHistory = ({ msg }) => {
  if (!msg) return null;
  console.log(msg);

  return msg.map((row, i) => (
    <div key={i} className="message-history">
      <div className="send">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
        <div className="message">{row.message}</div>
      </div>
    </div>
  ));
};

MessageHistory.PropTypes = {
  msg: PropTypes.array.isRequired,
};

export default MessageHistory;
