import React from 'react';
import { shallow, } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Block, } from './Block';


const setup = (props = {}) => {
  const requiredProps = {
    value: 0,
    ...props,
  };
  return shallow(<Block {...requiredProps} />);
};

it('should render Block without crashing', () => {
  const wrapper = setup({ value: 0, });
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render Block with the value 64', () => {
  const wrapper = setup({ value: 65, });
  expect(toJson(wrapper)).toMatchSnapshot();
});
