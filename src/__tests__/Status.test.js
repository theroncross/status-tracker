import React from 'react';
import renderer from 'react-test-renderer';
import Status from './Status';

describe('Status component renders correctly', () => {
  it('renders "SUCCESS" correctly', () => {
    const props = {
      "start_date": "2014-01-17T06:12:47.566+5:00",
      "request_date": "2014-01-17T05:46:08.542+6:00",
      "end_date": "2014-01-18T02:15:34.721+5:00",
      "status": "The system reports success",
      "total": 56,
      "processed": 56,
    };
    const rendered = renderer.create(
      <Status {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders "ERROR" correctly', () => {
    const props = {
      "start_date": "2013-11-02T19:46:06.857+3:00",
      "request_date": "2013-11-02T18:52:03.031+3:00",
      "end_date": "2013-11-03T01:01:58.489+5:00",
      "status": "Task Failed",
      "total": 920,
      "processed": 1,
    };
    const rendered = renderer.create(
      <Status {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders "INACTIVE" correctly', () => {
    const props = {
      "request_date": "2014-01-04T19:13:32.427+6:00",
      "remaining": 337533112,
      "status": "Task requires action before proceeding",
      "total": 431700,
    };
    const rendered = renderer.create(
      <Status {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders "IN PROGRESS" correctly', () => {
    const props = {
      "start_date": "2014-02-13T14:51:03.131+5:00",
      "request_date": "2014-02-13T12:45:18.855+3:00",
      "remaining": 880387859,
      "total": 625834540,
      "processed": 93,
      "status": "Task Progressing",
    };
    const rendered = renderer.create(
      <Status {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
})
