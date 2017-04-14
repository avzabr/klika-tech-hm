import React, {Component} from "react";
import {ButtonToolbar} from "react-bootstrap";
import Filter from "./Filter";

class FilterWrapper extends Component {

    render() {
        const selected_author = this.props.state.filter.selected_author;
        const selected_genre = this.props.state.filter.selected_genre;
        const selected_year = this.props.state.filter.selected_year;

        let uniq = a => [...new Set(a)];

        const authors = uniq(this.props.state.songs.map((song) => song.author)).sort();
        const genres = uniq(this.props.state.songs.map((song) => song.genre)).sort();
        const years = uniq(this.props.state.songs.map((song) => song.year)).sort();

        return (
            <div className="filter-wrapper">
                <ButtonToolbar>
                    <Filter itemName='Author' items={authors} selected_item={selected_author}
                            filterFunction={this.props.filterAuthor}/>
                    <Filter itemName='Genre' items={genres} selected_item={selected_genre} filterFunction={this.props.filterGenre} />
                    <Filter itemName='Year' items={years} selected_item={selected_year} filterFunction={this.props.filterYear} />
                </ButtonToolbar>
            </div>
        )
    }

}

export default FilterWrapper;