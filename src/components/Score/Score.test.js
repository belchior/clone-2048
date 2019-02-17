import React from 'react';
import { shallow } from 'enzyme';

import { Score } from './Score';

const setup = (props = {}) => {
  const requiredProps = {
    best: 0,
    current: 0,
    ...props,
  };
  return shallow(<Score {...requiredProps} />);
};

it('Score should render without crashing', () => {
  const props = { best: 2000, current: 1024 };
  const renderComponent = () => setup(props);
  expect(renderComponent).not.toThrow();
});

it('Score should assume 0 as default value to current and best', () => {
  const renderComponent = () => setup();
  expect(renderComponent).not.toThrow();
});
