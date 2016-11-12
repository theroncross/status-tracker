import React from 'react';
import moment from 'moment';

const Time = (props) => {
  const formattedTime = (() => {
    const { time, fromNow, remaining } = props;
    const localOffset = moment().format('Z');
    const isoTime = moment(time, 'YYYY-MM-DDThh:mm:ss.SSSZ').toISOString();

    if(fromNow) {
      const timeFormat = remaining < 48 * 60 * 60 * 1000 ? 'hh:mm:ss' : 'D [days]'
      return moment.utc(remaining).format(timeFormat);
    }

    return moment(isoTime.replace(/Z/, localOffset)).format('MM/DD/YYYY hh:mm A');
  })();

  return (
    <span>{formattedTime}</span>
  );
};

export default Time;
