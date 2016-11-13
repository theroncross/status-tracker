import React from 'react';
import renderer from 'react-test-renderer';
import Time from './Time';

describe('Time component renders correctly', () => {
  it('renders date correctly', () => {
    const props = {
      "time": "2014-01-18T02:15:34.721+5:00",
    };
    const rendered = renderer.create(
      <Time {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders large remaining correctly', () => {
    const props = {
      "time": "2014-01-04T19:13:32.427+6:00",
      "remaining": 337533112,
    };
    const rendered = renderer.create(
      <Time {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders small remaining correctly', () => {
    const props = {
      "time": "2014-02-13T14:51:03.131+5:00",
      "remaining": 387859,
    };
    const rendered = renderer.create(
      <Time {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
})
