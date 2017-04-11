function filter(new_state = {}, action) {
    switch (action.type) {
        case 'SET_AUTHOR':
            console.log('SET_AUTHOR');
            const author = action.author;
            new_state = Object.assign(new_state);
            new_state.author = author;
            return new_state;
        default:
            return new_state;
    }
}

export default filter;