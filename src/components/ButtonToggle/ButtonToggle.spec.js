import React from 'react';
import { shallow, } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ButtonToggle, } from './ButtonToggle';


const setup = (props = {}) => {
  const requiredProps = {
    onClick: () => {},
    ...props,
  };
  return shallow(<ButtonToggle {...requiredProps} />);
};

it('ButtonToggle should render without crashing', () => {
  const props = {
    active: true,
    label: 'toggle button',
    title: 'my toggle button',
  };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('ButtonToggle should call the callback when click', () => {
  const props = {
    onClick: jest.fn(),
  };
  const wrapper = setup(props);
  wrapper.find('#toggleButton').simulate('click');
  expect(props.onClick).toHaveBeenCalled();
});

it('ButtonToggle should throw error when onClick callback is not defined', () => {
  const props = { onClick: null, };
  const renderComponent = () => setup(props);
  expect(renderComponent).toThrow();
});

it('ButtonToggle should assume data-active as false if active prop is false', () => {
  const props = { active: false, };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('ButtonToggle should set data-active to false as default value', () => {
  const wrapper = setup();
  expect(toJson(wrapper)).toMatchSnapshot();
});


it('ButtonToggle should data-active as true if active prop is true', () => {
  const props = { active: true, };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('ButtonToggle should assume title value as the same as label if title are not passed', () => {
  const props = { label: 'my label', };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});
