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

describe('Controllers', () => {
  it('should render Controllers with buttons disabled without crashing', () => {
    const props = {
      hardMode: false,
      rollback: 2,
      status: 'WELCOME',
    };
    const wrapper = setup(props);
    expect(toJson(wrapper.find('button'))).toMatchInlineSnapshot(`
      Array [
        <button
          className="btn controls-btn_back"
          disabled={true}
          onClick={[Function]}
          title="Step back"
          type="button"
        >
          back (
          2
          )
        </button>,
        <button
          className="btn controls-btn_restart"
          disabled={true}
          onClick={[Function]}
          title="Restart the game"
          type="button"
        >
          restart
        </button>,
      ]
    `);
  });

  it('should render Controllers with buttons enabled without crashing', () => {
    const props = { status: 'PLAYING' };
    const wrapper = setup(props);
    expect(toJson(wrapper.find('button'))).toMatchInlineSnapshot(`
      Array [
        <button
          className="btn controls-btn_back"
          disabled={true}
          onClick={[Function]}
          title="Step back"
          type="button"
        >
          back (
          0
          )
        </button>,
        <button
          className="btn controls-btn_restart"
          disabled={false}
          onClick={[Function]}
          title="Restart the game"
          type="button"
        >
          restart
        </button>,
      ]
    `);
  });

  it('should render Controllers with rollback button disabled when rollback is 0', () => {
    const props = {
      hardMode: false,
      rollback: 0,
      status: 'PLAYING',
    };
    const wrapper = setup(props);
    expect(toJson(wrapper.find('.controls-btn_back'))).toMatchInlineSnapshot(`
      <button
        className="btn controls-btn_back"
        disabled={true}
        onClick={[Function]}
        title="Step back"
        type="button"
      >
        back (
        0
        )
      </button>
    `);
  });
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
