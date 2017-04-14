function filterReducer(filter = {}, action) {
    let new_filter = {...filter};
    switch (action.type) {
        case 'FILTER_AUTHOR':
            console.log('FILTER_AUTHOR');
            const author = action.author;
            new_filter.selected_author = author === 'CLEAR' ? undefined : author;
            return new_filter;
        case 'FILTER_GENRE':
            console.log('FILTER_GENRE');
            const genre = action.genre;
            new_filter.selected_genre = genre === 'CLEAR' ? undefined : genre;
            return new_filter;
        case 'FILTER_YEAR':
            console.log('FILTER_YEAR');
            const year = action.year;
            new_filter.selected_year = year === 'CLEAR' ? undefined : year;
            return new_filter;
        default:
            return filter;
    }
}

export default filterReducer;