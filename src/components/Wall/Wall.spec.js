import React from 'react';
import { shallow, } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Wall, } from './Wall';

const setup = (props = {}) => {
  const requiredProps = {
    hardMode: false,
    moveError: false,
    wall: [],
    ...props,
  };
  return shallow(<Wall {...requiredProps} />);
};

describe('Wall', () => {
  it('should render Wall without crashing', () => {
    const wrapper = setup();
    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="Wall "
      />
    `);
  });

  it('should render Wall with 2 Blocks', () => {
    const props = { wall: [ 2, 4, ], };
    const wrapper = setup(props);
    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="Wall "
      >
        <Block
          key="0-2"
          value={2}
        />
        <Block
          key="1-4"
          value={4}
        />
      </div>
    `);
  });

  it('should render Wall adding the className hardMode', () => {
    const props = { hardMode: true, wall: [ 2, 4, ], };
    const wrapper = setup(props);
    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="Wall hardMode "
      >
        <Block
          key="0-2"
          value={2}
        />
        <Block
          key="1-4"
          value={4}
        />
      </div>
    `);
  });

  it('should render Wall adding the className moveError', () => {
    const props = { moveError: true, wall: [ 2, 4, ], };
    const wrapper = setup(props);
    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="Wall moveError "
      >
        <Block
          key="0-2"
          value={2}
        />
        <Block
          key="1-4"
          value={4}
        />
      </div>
    `);
  });

  it('should render Wall adding the className hardMode moveError separeted by space', () => {
    const props = { hardMode: true, moveError: true, wall: [ 2, 4, ], };
    const wrapper = setup(props);
    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="Wall hardMode moveError "
      >
        <Block
          key="0-2"
          value={2}
        />
        <Block
          key="1-4"
          value={4}
        />
      </div>
    `);
  });
});
