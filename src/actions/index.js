export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (newCount) => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: newCount
  }
};

export const decrement = (newCount) => {
  // Fill in this function
  return {
    type: DECREMENT,
    payload: newCount
  }
};

export const UPDATE_NAME = 'UPDATE_NAME';

