import React from 'react';
import { Controllers } from './Controllers';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

const rollbackAction = jest.fn();
const restartAction = jest.fn();
const hardModeAction = jest.fn();

it('should render Controllers with buttons enabled without crashing', () => {
  let tree = renderer.create(
    <Controllers
      rollbackAction={rollbackAction}
      restartAction={restartAction}
      hardModeAction={hardModeAction}
      hardMode={false}
      rollback={2}
      welcome={false}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Controllers with buttons disabled without crashing', () => {
  let tree = renderer.create(
    <Controllers
      rollbackAction={rollbackAction}
      restartAction={restartAction}
      hardModeAction={hardModeAction}
      hardMode={false}
      rollback={2}
      welcome={true}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Controllers with rollback button disabled when rollback is 0', () => {
  let tree = renderer.create(
    <Controllers
      rollbackAction={rollbackAction}
      restartAction={restartAction}
      hardModeAction={hardModeAction}
      hardMode={false}
      rollback={0}
      welcome={false}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

describe('when clicked on', () => {
  let tree;

  beforeEach(() => {
    tree = mount(
      <Controllers
        rollbackAction={rollbackAction}
        restartAction={restartAction}
        hardModeAction={hardModeAction}
        hardMode={false}
        rollback={2}
        welcome={false}
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
        rollbackAction={rollbackAction}
        restartAction={restartAction}
        hardModeAction={hardModeAction}
        hardMode={false}
        rollback={2}
        welcome={true} // disabling Controllers button
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
