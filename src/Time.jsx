import React from 'react';
import moment from 'moment';

const Time = (props) => {
  const formatTime = time => moment(time.replace(/T/, ' ')).format('MM/DD/YYYY hh:mm A');

  return (
    <span>{formatTime(props.time)}</span>
  );
};

export default Time;
