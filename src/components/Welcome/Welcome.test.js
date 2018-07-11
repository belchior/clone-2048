import React from 'react';
import rerender from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Welcome } from './index';

it('Welcome should render with an empty list without crashing', () => {
  const wall = [];
  const button = { text: '', action: () => {}};

  const tree = rerender.create(
    <Welcome wall={wall} button={button}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Welcome should render with a list without crashing', () => {
  const wall = [2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  const button = { text: 'Action', action: () => {}};

  const tree = rerender.create(
    <Welcome wall={wall} button={button}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('WelcomeAction button when clicked should call buttonAction callback', () => {
  const wall = [];
  const buttonAction = jest.fn();
  const button = { text: 'Action', action: buttonAction};

  const component = shallow(<Welcome wall={wall} button={button}/>);
  component.find('.WelcomeAction').simulate('click');

  expect(buttonAction.mock.calls).toHaveLength(1);
});
