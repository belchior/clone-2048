import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import { Welcome } from './index';

const renderer = new ShallowRenderer();

it('Welcome should render with an empty list without crashing', () => {
  const props = {
    wall: [],
    button: { text: '', action: () => {}},
  };
  const tree = renderer.render(<Welcome {...props} />);

  expect(tree).toMatchSnapshot();
});

it('Welcome should render with a list without crashing', () => {
  const props = {
    wall: [2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    button: { text: 'Action', action: () => {}},
  };
  const tree = renderer.render(<Welcome {...props} />);

  expect(tree).toMatchSnapshot();
});

it('WelcomeAction button when clicked should call buttonAction callback', () => {
  const buttonAction = jest.fn();
  const props = {
    wall: [],
    button: { text: 'Action', action: buttonAction},
  };
  const component = shallow(<Welcome {...props} />);
  component.find('.WelcomeAction').simulate('click');

  expect(buttonAction.mock.calls).toHaveLength(1);
});
