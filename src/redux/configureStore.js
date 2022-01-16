import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Restaurants } from './restaurants';
import { Services } from './services';
import { RestaurantsFl } from './restaurantList';
import { Menus } from './menus';
import { Examples } from './imageExamples';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            restaurants: Restaurants,
            services: Services,
            menus: Menus,
            restaurantsfl: RestaurantsFl,
            examples: Examples
        })
    );
    return store;
};