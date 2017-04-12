/**
 * Created by Aliaksandr on 11.04.2017.
 */

import {createStore} from "redux";

import songs from "./data/songs";
import rootReducer from "./reducers/index";


const defaultState = {
    songs,
    filter: {
        selected_author: undefined,
        selected_year: undefined,
        selected_genre: undefined
    }
};

const store = createStore(rootReducer, defaultState);
export default store;