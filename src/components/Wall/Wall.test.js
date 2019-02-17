import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Wall } from './Wall';


const setup = (props = {}) => {
  const requiredProps = {
    hardMode: false,
    moveError: false,
    wall: [],
    ...props,
  };
  return shallow(<Wall {...requiredProps} />);
};

it('should render Wall without crashing', () => {
  const wrapper = setup();
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render Wall with 2 Blocks', () => {
  const props = { wall: [2,4] };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render Wall adding the className hardMode', () => {
  const props = { wall: [2,4], hardMode: true };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render Wall adding the className moveError', () => {
  const props = { wall: [2,4], moveError: true };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render Wall adding the className hardMode moveError separeted by space', () => {
  const props = { wall: [2,4], hardMode: true, moveError: true };
  const wrapper = setup(props);
  expect(toJson(wrapper)).toMatchSnapshot();
});
