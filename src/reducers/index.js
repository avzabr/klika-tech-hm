/**
 * Created by Aliaksandr on 11.04.2017.
 */

import {combineReducers} from "redux";
import filter from "./filter";
import songs from "./songs";

const rootReducer = combineReducers({filter, songs});

export default rootReducer;