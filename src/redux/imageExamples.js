import * as ActionTypes from "./ActionTypes";

export const Examples = (
  state = {
    isLoading: true,
    errMess: null,
    examples: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_EXAMPLES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        examples: action.payload,
      };
    case ActionTypes.EXAMPLES_LOADING:
      return { ...state, isLoading: true, errMess: null, examples: [] };
    case ActionTypes.EXAMPLES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
