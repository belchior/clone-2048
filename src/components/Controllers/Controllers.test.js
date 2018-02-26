import React from 'react';
import { Controllers } from './Controllers';
import renderer from 'react-test-renderer';

const rollBackAction = jest.fn();
const saveAction = jest.fn();
const loadAction = jest.fn();
const restartAction = jest.fn();
const hardModeAction = jest.fn();

it('should render Controllers without crashing', () => {
  let tree = renderer.create(
    <Controllers
      rollBackAction={rollBackAction}
      saveAction={saveAction}
      loadAction={loadAction}
      restartAction={restartAction}
      hardModeAction={hardModeAction}
      hardMode={false}
      rollBack={2}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
