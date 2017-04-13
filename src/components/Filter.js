import React, {Component} from "react";
import {ButtonToolbar, DropdownButton, MenuItem} from "react-bootstrap";

class Filter extends Component {

    render() {
        const selected_author = this.props.state.filter.selected_author;
        const selected_genre = this.props.state.filter.selected_genre;
        const selected_year = this.props.state.filter.selected_year;

        const authors = this.props.state.songs.map((song) => <MenuItem key={song.author} eventKey={song.author}
                                                                       active={selected_author === song.author}>{song.author}</MenuItem>);
        const genres = this.props.state.songs.map((song) => <MenuItem key={song.genre} eventKey={song.genre}
                                                                      active={selected_genre === song.genre}>{song.genre}</MenuItem>);
        const years = this.props.state.songs.map((song) => <MenuItem key={song.year} eventKey={song.year}
                                                                     active={selected_year === song.year}>{song.year}</MenuItem>);
        return (
            <div >
                <ButtonToolbar>
                    <DropdownButton bsSize="small"
                                    title={selected_author ? selected_author : "Filter by Author"}
                                    id="filter-author" onSelect={this.props.filterAuthor}>
                        {authors}
                    </DropdownButton>
                    <DropdownButton bsSize="small"
                                    title={selected_genre ? selected_genre : "Filter by Genre"}
                                    id="filter-genre" onSelect={this.props.filterGenre}>
                        {genres}
                    </DropdownButton>
                    <DropdownButton bsSize="small"
                                    title={selected_year ? selected_year : "Filter by Year"}
                                    id="filter-year" onSelect={this.props.filterYear}>
                        {years}
                    </DropdownButton>                    
                </ButtonToolbar>
            </div>
        )
    }


}

export default Filter;