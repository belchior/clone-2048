import { moveTo } from './move';
import * as actions from '../../reducers/actions/actions';
import * as actionType from '../../reducers/actions/types';

const initialState = {
  maxBlock: 2048,
  rollback: 2,
  status: actionType.PLAYING,
  wall: [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
  ],
};

const mockState = (state={}) => ({
  ...initialState,
  ...state,
});

const dispatch = jest.fn(action => action);

const getActionFromMockCalls = action => mockCalls => mockCalls.reduce((acc, item) => {
  return item[0].type === action ? item[0] : acc;
}, null);

describe('moveTo', () => {

  beforeEach(() => {
    dispatch.mockReset();
  });

  it('should be a function', () => {
    expect(typeof moveTo).toBe('function');
  });

  it('should dispatch PLAYER_LOSE when there is no zero and pairs at wall and rollback is zero', () => {
    moveTo(dispatch)(initialState)('left')();
    expect(dispatch.mock.calls[0][0]).not.toEqual(actions.playerLose());

    dispatch.mockReset();
    const state = mockState({
      rollback: 0,
      wall: [
        2, 4, 2, 4,
        4, 2, 4, 2,
        2, 4, 2, 4,
        4, 2, 4, 2,
      ],
    });

    moveTo(dispatch)(state)('left')();
    expect(dispatch.mock.calls[0][0]).toEqual(actions.playerLose());
  });

  it('should dispatch MOVE_ERROR when the direction chosen don\'t change the wall', () => {
    let state = mockState({ wall: [2,2,2,2, 0,0,0,0, 0,0,0,0, 0,0,0,0,] });
    moveTo(dispatch)(state)('top')();
    expect(dispatch.mock.calls[0][0]).toEqual(actions.moveError(true));

    dispatch.mockReset();
    state = mockState({ wall: [0,0,0,0, 0,0,0,0, 0,0,0,0, 2,2,2,2,] });
    moveTo(dispatch)(state)('bottom')();
    expect(dispatch.mock.calls[0][0]).toEqual(actions.moveError(true));

    dispatch.mockReset();
    state = mockState({ wall: [0,0,0,2, 0,0,0,2, 0,0,0,2, 0,0,0,2,] });
    moveTo(dispatch)(state)('right')();
    expect(dispatch.mock.calls[0][0]).toEqual(actions.moveError(true));

    dispatch.mockReset();
    state = mockState({ wall: [2,0,0,0, 2,0,0,0, 2,0,0,0, 2,0,0,0,] });
    moveTo(dispatch)(state)('left')();
    expect(dispatch.mock.calls[0][0]).toEqual(actions.moveError(true));
  });

  it('should dispatch PLAYER_WON when the max block is found in wall', () => {
    const state = mockState({
      wall: [2,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,]
    });
    moveTo(dispatch)(state)('bottom')();
    const action = getActionFromMockCalls(actionType.PLAYER_WON)(dispatch.mock.calls);
    expect(action).not.toEqual(actions.playerWon());


    const stateWon = mockState({
      maxBlock: 1024,
      wall: [1024,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,]
    });
    moveTo(dispatch)(stateWon)('bottom')();
    const actionPlayerWon = getActionFromMockCalls(actionType.PLAYER_WON)(dispatch.mock.calls);
    expect(actionPlayerWon).toEqual(actions.playerWon());
  });

  it('should dispatch MOVE_ERROR when the direction is not bottom, left, right and top', () => {
    const state = mockState({
      wall: [2,2,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,]
    });

    moveTo(dispatch)(state)('x')();
    const action = getActionFromMockCalls(actionType.MOVE_ERROR)(dispatch.mock.calls);

    expect(action).toEqual(actions.moveError(true));
  });

  it('should not dispatch when the status is difrent of PLAYING', () => {
    const state = mockState({
      wall: [2,2,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,],
      status: actions.PLAYER_LOSE,
    });

    moveTo(dispatch)(state)('right')();
    expect(dispatch.mock.calls).toHaveLength(0);
  });
});
