import React from 'react';
import { shallow, } from 'enzyme';
import toJson from 'enzyme-to-json';

import { App, } from './App';

const setup = (props = {}, type = 'shallow') => {
  const requiredProps = {
    bestScore: 0,
    hardMode: false,
    maxBlock: 0,
    moveTo: () => () => () => {},
    restartAction: () => {},
    rollback: 0,
    score: 0,
    status: '',
    wall: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    welcomeWall: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    ...props,
  };

  switch (type) {
    case 'shallow':
      return shallow(<App {...requiredProps} />);
    default:
      return shallow(<App {...requiredProps} />);
  }
};

describe('App', () => {
  it('should render Wall without crashing', () => {
    const props = { status: 'PLAYING', };
    const wrapper = setup(props);
    const Wall = toJson(wrapper.find('Connect(Wall)'));

    expect(Wall).toMatchInlineSnapshot('<Connect(Wall) />');
  });

  it('should render Wall without crashing when status attribute is not defined', () => {
    const props = { status: '', };
    const wrapper = setup(props);
    const Wall = toJson(wrapper.find('Connect(Wall)'));

    expect(Wall).toMatchInlineSnapshot('<Connect(Wall) />');
  });

  it('should render Welcome without crashing', () => {
    const props = { status: 'WELCOME', };
    const wrapper = setup(props, 'shallow');
    const Welcome = toJson(wrapper.find('Connect(Welcome)'));

    expect(Welcome).toMatchInlineSnapshot('<Connect(Welcome) />');
  });

  it('should render ModalLose without crashing', () => {
    const props = { status: 'PLAYER_LOSE', };
    const wrapper = setup(props, 'shallow');
    const { title, } = wrapper.find('Modal').props();
    const ModalLose = toJson(wrapper.find('Modal'));

    expect(title).toBe('You Lose');
    expect(ModalLose).toMatchInlineSnapshot(`
      <Modal
        bestScore={0}
        button={
          Object {
            "handleAction": [Function],
            "text": "Try Again",
          }
        }
        hardMode={false}
        score={0}
        title="You Lose"
        wall={
          Array [
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
            0,
          ]
        }
      />
    `);
  });

  it('should render ModalWon without crashing', () => {
    const props = { status: 'PLAYER_WON', };
    const wrapper = setup(props, 'shallow');
    const { title, } = wrapper.find('Modal').props();
    const ModalWon = toJson(wrapper.find('Modal'));

    expect(title).toBe('You Won');
    expect(ModalWon).toMatchInlineSnapshot(`
      <Modal
        bestScore={0}
        button={
          Object {
            "handleAction": [Function],
            "text": "Try Again",
          }
        }
        hardMode={false}
        score={0}
        title="You Won"
        wall={
          Array [
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
            0,
          ]
        }
      />
    `);
  });
});
