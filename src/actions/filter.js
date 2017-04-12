export function filterAuthor(author){
    return {
        type: 'FILTER_AUTHOR',
        author
    }
}

export function filterYear(year){
    return {
        type: 'FILTER_AUTHOR',
        year
    }
}

export function filterGenre(genre){
    return {
        type: 'FILTER_GENRE',
        genre
    }
}