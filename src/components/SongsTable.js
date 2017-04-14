import React, {Component} from "react";

class SongsTable extends Component {

    render() {
        const filtered_songs = this.props.state.filter.songs;
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
;

export default SongsTable;