import React from 'react';
import moment from 'moment';

const StatusRow = (props) => {
  const formatTime = time => moment(time.replace(/T/, ' ')).format('MM/DD/YYYY hh:mm A');

  return (
    <tr>
      <td>{props.start_date && formatTime(props.start_date)}<br />{props.status}</td>
      <td>{props.processed}/{props.total}</td>
      <td><a href={`mailto:${props.email}`} >{props.fullname}</a></td>
      <td>{props.request_date}</td>
    </tr>
  )
}

export default StatusRow;
