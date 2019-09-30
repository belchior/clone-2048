import { mapStateToProps, } from './index';
import { initialState, } from '../../reducers';

describe('App.connected', () => {
  it('mapStateToProps should be a function', () => {
    expect(typeof mapStateToProps === 'function').toBe(true);
  });

  it('mapStateToProps should return an Object that match the following structure', () => {
    const props = mapStateToProps(initialState);

    expect(props).toMatchInlineSnapshot(
      {
        bestScore: expect.any(Number),
        hardMode: expect.any(Boolean),
        maxBlock: expect.any(Number),
        rollback: expect.any(Number),
        score: expect.any(Number),
        status: expect.any(String),
        wall: expect.any(Array),
        welcomeWall: expect.any(Array),
      },
      `
      Object {
        "bestScore": Any<Number>,
        "hardMode": Any<Boolean>,
        "maxBlock": Any<Number>,
        "rollback": Any<Number>,
        "score": Any<Number>,
        "status": Any<String>,
        "wall": Any<Array>,
        "welcomeWall": Any<Array>,
      }
    `
    );
  });
});
