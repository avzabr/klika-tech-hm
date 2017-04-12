import React, { Component } from 'react';
import songs from '../data/songs'

class SongsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs
        };
    }

    render() {
        return (
            <div className="songs-table">
                <pre>
                    {JSON.stringify(this.state.songs, null, ' ')}
                </pre>
            </div>
        )
    }


};

export default SongsTable;