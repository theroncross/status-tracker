import React from 'react';
import Time from './Time.jsx';

const Status = (props) => {
  const classifyStatus = (data) => {
    const { start_date, end_date, total, processed } = data;
    if(!start_date) return 'INACTIVE';
    if(start_date && end_date && total !== processed) return 'ERROR';
    if(start_date && !end_date && total !== processed) return 'IN PROGRESS';
    if(start_date && end_date && total === processed) return 'SUCCESS';
  };

  const statusSummary = (() => {
    const { start_date, end_date, total, processed } = props;
    switch(classifyStatus({ start_date, end_date, total, processed })) {
      case 'INACTIVE':
        return 'not started';
      case 'ERROR':
        return 'Completed: ';
      case 'IN PROGRESS':
        return 'Halted: ';
      case 'SUCCESS':
        return 'Completed: ';
      default:
        return null;
    }
  })();

  console.log(statusSummary)

  return(
    <div className="status__container">
      <p className="status__summary">
        {statusSummary}{props.end_date && <Time time={props.end_date} />}
      </p>
      <p className="status__description">
        {props.status}
      </p>
    </div>
  )
}

export default Status;
