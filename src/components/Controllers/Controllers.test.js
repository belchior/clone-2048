import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Controllers } from './Controllers';


const setup = (props = {}) => {
  const requiredProps = {
    hardModeAction: () => {},
    restartAction: () => {},
    rollbackAction: () => {},
    status: '',
    ...props,
  };
  return shallow(<Controllers {...requiredProps} />);
};

it('should render Controllers with buttons disabled without crashing', () => {
  const props = {
    hardMode: false,
    rollback: 2,
    status: 'WELCOME',
  };
  const wrapper = setup(props);
  expect(toJson(wrapper.find('button'))).toMatchSnapshot();
});

it('should render Controllers with buttons enabled without crashing', () => {
  const props = { status: 'PLAYING' };
  const wrapper = setup(props);
  expect(toJson(wrapper.find('button'))).toMatchSnapshot();
});

it('should render Controllers with rollback button disabled when rollback is 0', () => {
  const props = {
    hardMode: false,
    rollback: 0,
    status: 'PLAYING',
  };
  const wrapper = setup(props);
  expect(toJson(wrapper.find('.controls-btn_back'))).toMatchSnapshot();
});

describe('when clicked on', () => {
  it('rollback button rollbackAction should be called', () => {
    const props = {
      rollback: 2,
      rollbackAction: jest.fn(),
    };
    const wrapper = setup(props);
    wrapper.find('.controls-btn_back').simulate('click');
    expect(props.rollbackAction.mock.calls).toHaveLength(1);
  });

  it('restart button restartAction should be called', () => {
    const props = {
      restartAction: jest.fn(),
    };
    const wrapper = setup(props);
    wrapper.find('.controls-btn_restart').simulate('click');
    expect(props.restartAction.mock.calls).toHaveLength(1);
  });
});

// describe('when Controllers button are disabled and clicked on', () => {
//   it('rollback button rollbackAction should not be called', () => {
//     const props = {
//       rollback: 2,
//       rollbackAction: jest.fn(),
//       status: 'WELCOME',
//     };
//     const wrapper = setup(props);
//     wrapper.find('.controls-btn_back').simulate('click');
//     expect(props.rollbackAction).not.toHaveBeenCalled();
//   });
//
//   it('restart button, the restartAction should not be called', () => {
//     const props = {
//       restartAction: jest.fn(),
//       rollback: 2,
//       status: 'WELCOME',
//     };
//     const wrapper = setup(props);
//     console.warn(wrapper.find('.controls-btn_restart').debug());
//     // wrapper.find('.controls-btn_restart').simulate('click');
//     expect(props.restartAction).not.toHaveBeenCalled();
//   });
// });
