import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { Restaurants } from "./restaurants";
import { RestaurantsFl } from "./restaurantsFl";
import { Requests } from "./requests";
import { Services } from "./services";
import { InitialContactForm } from "./forms";
import { Examples } from "./imageExamples";


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      restaurants: Restaurants,
      requests: Requests,
      restaurantsfl: RestaurantsFl, 
      services: Services,
      examples: Examples,
      ...createForms({
        contactMessageForm: InitialContactForm
      })
    }),
      applyMiddleware(thunk, logger)
  );
  return store;
};
