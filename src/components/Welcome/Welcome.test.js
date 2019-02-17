import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Welcome } from './index';

const setup = (props = {}) => {
  const requiredProps = {
    button: { text: '', handleAction: () => {} },
    hardMode: false,
    wall: [],
    ...props,
  };
  return shallow(<Welcome {...requiredProps} />);
};

it('Welcome should render with an empty list without crashing', () => {
  const props = {
    wall: [],
    button: { text: '', handleAction: () => {}},
  };
  const renderComponent = () => setup(props);
  expect(renderComponent).not.toThrow();
});

it('Welcome should render with a list without crashing', () => {
  const props = {
    wall: [2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    button: { text: 'Action', handleAction: () => {}},
  };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('WelcomeAction button when clicked should call buttonAction callback', () => {
  const buttonAction = jest.fn();
  const props = {
    wall: [],
    button: { text: 'Action', handleAction: buttonAction},
  };
  const wrapper = setup(props);
  wrapper.find('.WelcomeAction').simulate('click');
  expect(buttonAction.mock.calls).toHaveLength(1);
});
