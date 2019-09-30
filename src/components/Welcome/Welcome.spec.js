import React from 'react';
import { shallow, } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Welcome, } from './index';

const setup = (props = {}) => {
  const requiredProps = {
    button: { handleAction: () => {}, text: '', },
    hardMode: false,
    wall: [],
    ...props,
  };
  return shallow(<Welcome {...requiredProps} />);
};

describe('Welcome', () => {
  it('should render with an empty list without crashing', () => {
    const props = {
      button: { handleAction: () => {}, text: '', },
      wall: [],
    };
    const renderComponent = () => setup(props);
    expect(renderComponent).not.toThrow();
  });

  it('should render with a list without crashing', () => {
    const props = {
      button: { handleAction: () => {}, text: 'Action', },
      wall: [ 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    };
    const wrapper = setup(props);
    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="Welcome"
      >
        <Wall
          hardMode={false}
          moveError={false}
          wall={
            Array [
              2,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]
          }
        />
        <button
          className="WelcomeAction"
          onClick={[Function]}
          type="button"
        >
          Action
        </button>
      </div>
    `);
  });

  it('welcomeAction button when clicked should call buttonAction callback', () => {
    const buttonAction = jest.fn();
    const props = {
      button: { handleAction: buttonAction, text: 'Action', },
      wall: [],
    };
    const wrapper = setup(props);
    wrapper.find('.WelcomeAction').simulate('click');
    expect(buttonAction.mock.calls).toHaveLength(1);
  });
});
