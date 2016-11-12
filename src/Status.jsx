import React from 'react';
import Time from './Time.jsx';

const Status = (props) => {
  const { start_date, end_date, total, processed, remaining, status } = props;

  const timeLabel = (() => {
    if(!start_date) return 'not started';
    if(start_date && end_date && total !== processed) return 'Halted: ';
    if(start_date && !end_date && total !== processed) return 'Time Remaining: ';
    if(start_date && end_date && total === processed) return 'Completed: ';
  })();

  const timeProps = (() => {
    if(end_date) {
      return { time: end_date };
    }
    if(remaining && start_date) {
      return {
        time: start_date,
        remaining: remaining,
        fromNow: true,
      };
    }
    return null;
  })();

  const highlightedStatus = (() => {
    return { __html: status.replace(/(success|fail|error)/i, '<strong>$1</strong>') }
  })();

  return(
    <div className="status__container">
      <p className="status__time">{timeLabel} <Time {...timeProps} /></p>
      <p className="status__description" dangerouslySetInnerHTML={highlightedStatus} />
    </div>
  )
}

export default Status;
