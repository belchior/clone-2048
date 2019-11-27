import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Keyboard } from './Keyboard';

// eslint-disable-next-line default-param-last
const setup = (props = {}, children) => {
  const requiredProps = {
    shortcuts: {
      action: () => {},
      shortcut: '',
    },
    ...props,
  };
  return shallow(<Keyboard {...requiredProps}>{children}</Keyboard>);
};

describe('Keyboard', () => {
  it('should be instantiable', () => {
    const keyboard = new Keyboard();
    expect(keyboard instanceof Keyboard).toBe(true);
  });

  it('should be extended from React Component', () => {
    const keyboard = new Keyboard();
    expect(keyboard instanceof Component).toBe(true);
  });

  it('should render without crashing', () => {
    const props = {
      shortcuts: [ { action: () => {}, shortcut: 'ctrl+d' } ],
    };
    const children = <div className="test">test</div>;
    const wrapper = setup(props, children);
    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="test"
        key=".0"
        onKeyUp={[Function]}
        tabIndex={-1}
      >
        test
      </div>
    `);
  });
});
