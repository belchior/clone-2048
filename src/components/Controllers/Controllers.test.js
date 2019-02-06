import React from 'react';
import { Controllers } from './Controllers';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';

const renderer = new ShallowRenderer();
const rollbackAction = jest.fn();
const restartAction = jest.fn();
const hardModeAction = jest.fn();

it('should render Controllers with buttons enabled without crashing', () => {
  const props = {
    rollbackAction: rollbackAction,
    restartAction: restartAction,
    hardModeAction: hardModeAction,
    hardMode: false,
    rollback: 2,
    status: 'PLAYING',
  };
  const tree = renderer.render(<Controllers {...props} />);

  expect(tree).toMatchSnapshot();
});

it('should render Controllers with buttons disabled without crashing', () => {
  const props = {
    rollbackAction: rollbackAction,
    restartAction: restartAction,
    hardModeAction: hardModeAction,
    hardMode: false,
    rollback: 2,
    status: 'WELCOME',
  };
  const tree = renderer.render(<Controllers {...props} />);

  expect(tree).toMatchSnapshot();
});

it('should render Controllers with rollback button disabled when rollback is 0', () => {
  const props = {
    rollbackAction: rollbackAction,
    restartAction: restartAction,
    hardModeAction: hardModeAction,
    hardMode: false,
    rollback: 0,
    status: 'PLAYING',
  };
  const tree = renderer.render(<Controllers {...props} />);

  expect(tree).toMatchSnapshot();
});

describe('when clicked on', () => {
  let tree;

  beforeEach(() => {
    tree = mount(
      <Controllers
        hardMode={false}
        hardModeAction={hardModeAction}
        restartAction={restartAction}
        rollback={2}
        rollbackAction={rollbackAction}
        status="PLAYING"
      />
    );

    rollbackAction.mockReset();
    restartAction.mockReset();
  });

  it('rollback button rollbackAction should be called', () => {
    tree.find('.controls-btn_back').simulate('click');
    expect(rollbackAction.mock.calls).toHaveLength(1);
  });

  it('restart button restartAction should be called', () => {
    tree.find('.controls-btn_restart').simulate('click');
    expect(restartAction.mock.calls).toHaveLength(1);
  });
});

describe('when Controllers button are disabled and clicked on', () => {
  let tree;

  beforeEach(() => {
    tree = mount(
      <Controllers
        hardMode={false}
        hardModeAction={hardModeAction}
        restartAction={restartAction}
        rollback={2}
        rollbackAction={rollbackAction}
        status="WELCOME" // disabling Controllers button
      />
    );
  });

  it('rollback button rollbackAction should not be called', () => {
    rollbackAction.mockReset();

    tree.find('.controls-btn_back').simulate('click');
    expect(rollbackAction.mock.calls).toHaveLength(0);
  });

  it('restart button restartAction should not be called', () => {
    restartAction.mockReset();

    tree.find('.controls-btn_restart').simulate('click');
    expect(restartAction.mock.calls).toHaveLength(0);
  });
});
