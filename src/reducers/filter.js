import {initialState} from "../store";

function filter(state = initialState, action) {
    switch (action.type) {
        case 'FILTER_AUTHOR':
            console.log('FILTER_AUTHOR');
            const author = action.author;
            state = {...state};
            state.filter.selected_author = author === 'CLEAR' ? undefined : author;
            return state;
        case 'FILTER_GENRE':
            console.log('FILTER_GENRE');
            const genre = action.genre;
            state = Object.assign({}, state);
            state.filter.selected_genre = genre === 'CLEAR' ? undefined : genre;
            return state;
        case 'FILTER_YEAR':
            console.log('FILTER_YEAR');
            const year = action.year;
            state = Object.assign({}, state);
            state.filter.selected_year = year === 'CLEAR' ? undefined : year;
            return state;
        default:
            return state;
    }
}

export default filter;