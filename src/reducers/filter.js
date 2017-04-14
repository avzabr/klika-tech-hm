function filterReducer(filter = {}, action) {
    var new_filter = {...filter};
    switch (action.type) {
        case 'FILTER_AUTHOR':
            console.log('FILTER_AUTHOR');
            const author = action.author;           
            new_filter.selected_author = author === 'CLEAR' ? undefined : author;
            new_filter.songs = new_filter.songs.filter((song) => new_filter.selected_author ? song.author === new_filter.selected_author : true);
            return new_filter;
        case 'FILTER_GENRE':
            console.log('FILTER_GENRE');
            const genre = action.genre;
            new_filter.selected_genre = genre === 'CLEAR' ? undefined : genre;
            new_filter.songs = new_filter.songs.filter((song) => new_filter.selected_genre ? song.genre === new_filter.selected_genre : true);
            return new_filter;
        case 'FILTER_YEAR':
            console.log('FILTER_YEAR');
            const year = action.year;
            new_filter.selected_year = year === 'CLEAR' ? undefined : year;
            new_filter.songs = new_filter.songs.filter((song) => new_filter.selected_year ? song.year === new_filter.selected_year : true);
            return new_filter;
        default:
            return filter;
    }
}

export default filterReducer;