import { QUESTION_OPENED } from '../actions/question';

const questionReducer = (state = [], action) => {
  switch (action.type) {
    case QUESTION_OPENED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default questionReducer;
