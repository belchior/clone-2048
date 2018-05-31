export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    return serializedState === null ? undefined : JSON.parse(serializedState);

  } catch (err) {
    return;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);

  } catch (err) {
    return;
  }
};

export const saveMoviment = (state) => {
  const storageState = loadState();
  const newState = {
    ...storageState,
    score: state.score,
    bestScore: state.bestScore,
    wall: state.wall,
    history: state.history,
  };
  saveState(newState);
};
