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

  const addBold = str => {
    return {__html: str.replace(/(success|fail|error)/i, '<strong>$1</strong>')}
  }

  const boldDescription = addBold(props.status)

  return(
    <div className="status__container">
      <p className="status__summary">
        {statusSummary}{props.end_date && <Time time={props.end_date} />}
      </p>
      <p className="status__description" dangerouslySetInnerHTML={addBold(props.status)} />
    </div>
  )
}

export default Status;
