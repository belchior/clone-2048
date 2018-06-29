import React from 'react';
import { Controllers } from './Controllers';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const rollbackAction = jest.fn();
const saveAction = jest.fn();
const loadAction = jest.fn();
const restartAction = jest.fn();
const hardModeAction = jest.fn();

it('should render Controllers without crashing', () => {
  let tree = renderer.create(
    <Controllers
      rollbackAction={rollbackAction}
      saveAction={saveAction}
      loadAction={loadAction}
      restartAction={restartAction}
      hardModeAction={hardModeAction}
      hardMode={false}
      rollback={2}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should add disabled attribute when rollback is 0', () => {
  let tree = renderer.create(
    <Controllers
      rollbackAction={rollbackAction}
      saveAction={saveAction}
      loadAction={loadAction}
      restartAction={restartAction}
      hardModeAction={hardModeAction}
      hardMode={false}
      rollback={0}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

describe('when clicked on action buttons', () => {
  let tree;

  beforeEach(() => {
    tree = shallow(
      <Controllers
        rollbackAction={rollbackAction}
        saveAction={saveAction}
        loadAction={loadAction}
        restartAction={restartAction}
        hardModeAction={hardModeAction}
        hardMode={false}
        rollback={2}
      />
    );
  });

  it('should rollbackAction be called', () => {
    tree.find('.controls-btn_back').simulate('click');
    expect(rollbackAction.mock.calls).toHaveLength(1);
  });

  it('should saveAction be called', () => {
    tree.find('.controls-btn_save').simulate('click');
    expect(saveAction.mock.calls).toHaveLength(1);
  });

  it('should loadAction be called', () => {
    tree.find('.controls-btn_load').simulate('click');
    expect(loadAction.mock.calls).toHaveLength(1);
  });

  it('should restartAction be called', () => {
    tree.find('.controls-btn_restart').simulate('click');
    expect(restartAction.mock.calls).toHaveLength(1);
  });
});
