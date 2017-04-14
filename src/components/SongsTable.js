import React, {Component} from "react";

class SongsTable extends Component {

    render() {
        const filter = this.props.state.filter;
        const filtered_songs = this.props.state.songs
            .filter((song) => {
                return (filter.selected_author ? song.author === filter.selected_author : true) &&
                    (filter.selected_genre ? song.genre === filter.selected_genre : true) &&
                    (filter.selected_year ? song.year === filter.selected_year : true)
            });
        const output = (filtered_songs.length > 0 ? JSON.stringify(filtered_songs, null, ' ') : "No songs matching filter criteria");

        return (
            <div className="songs-table">
                <pre>
                    {output}
                </pre>
            </div>
        )
    }

}

export default SongsTable;