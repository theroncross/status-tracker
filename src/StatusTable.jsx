import React from 'react';
import StatusRow from './StatusRow.jsx';

const StatusTable = (props) => {
  const sorted = rows => {
    return [...rows].sort((a, b) => {
      if(a.end_date && !b.end_date) return -1;
      if(!a.end_date && b.end_date) return 1;
      return a.end_date < b.end_date;
    });
  }

  const rows = props.data.map(row => {
    const { id, ...props } = row;
    return (
      <StatusRow
        key={id}
        {...props}
      />
    )
  });

  return(
    <table className="status-table">
      <thead className="status-table__header">
        <tr>
          <th>status</th>
          <th>progress</th>
          <th>user</th>
          <th>request date</th>
        </tr>
      </thead>
      <tbody>{sorted(rows)}</tbody>
    </table>
  );
}


export default StatusTable;
