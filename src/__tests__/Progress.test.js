import React from 'react';
import renderer from 'react-test-renderer';
import Progress from './Progress';

describe('Progress component renders correctly', () => {
  it('renders without processsed correctly', () => {
    const props = {
      "total": 202373619,
    };
    const rendered = renderer.create(
      <Progress {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders bytes correctly', () => {
    const props = {
      "processed": 500,
      "total": 202373619,
    };
    const rendered = renderer.create(
      <Progress {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders kilobytes correctly', () => {
    const props = {
      "processed": 5000,
      "total": 202373619,
    };
    const rendered = renderer.create(
      <Progress {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders Megabytes correctly', () => {
    const props = {
      "processed": 5000000,
      "total": 202373619,
    };
    const rendered = renderer.create(
      <Progress {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders Gigabytes correctly', () => {
    const props = {
      "processed": 5000000000,
      "total": 202373619,
    };
    const rendered = renderer.create(
      <Progress {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders Terabytes correctly', () => {
    const props = {
      "processed": 5000000000000,
      "total": 202373619,
    };
    const rendered = renderer.create(
      <Progress {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
})
