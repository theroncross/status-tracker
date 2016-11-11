import React from 'react';
import Status from './Status.jsx';

const StatusRow = (props) => {
  const { start_date, end_date, request_date, fullname, email, processed, total, status } = props;

  return (
    <tr className="status-table__row">
      <td>
        <Status
          start_date={start_date}
          end_date={end_date}
          total={total}
          processed={processed}
          status={status}
        />
      </td>
      <td>{processed}/{total}</td>
      <td><a href={`mailto:${email}`} >{fullname}</a></td>
      <td>{request_date}</td>
    </tr>
  )
}

export default StatusRow;
