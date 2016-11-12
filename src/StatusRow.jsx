import React from 'react';
import Status from './Status.jsx';
import Progress from './Progress.jsx';
import Time from './Time.jsx';

const StatusRow = (props) => {
  const { start_date, end_date, remaining, request_date, fullname, email, processed, total, status } = props;

  return (
    <tr className="status-table__row">
      <td>
        <Status
          start_date={start_date}
          end_date={end_date}
          remaining={remaining}
          total={total}
          processed={processed}
          status={status}
        />
      </td>
      <td><Progress processed={processed} total={total} /></td>
      <td><a href={`mailto:${email}`} >{fullname}</a></td>
      <td><Time time={request_date} /></td>
    </tr>
  )
}

export default StatusRow;
