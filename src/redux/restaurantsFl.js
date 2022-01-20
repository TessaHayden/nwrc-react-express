import * as ActionTypes from "./ActionTypes";

export const RestaurantsFl = (
  state = { isLoading: true, errMess: null, restaurantsFl: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_RESTAURANTSFL:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        restaurantsFl: action.payload,
      };
    case ActionTypes.RESTAURANTSFL_LOADING:
      return { ...state, isLoading: true, errMess: null, restaurantsFl: [] };
    case ActionTypes.RESTAURANTSFL_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
