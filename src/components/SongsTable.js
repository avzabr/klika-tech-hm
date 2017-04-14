import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

class SongsTable extends Component {

    render() {
        const filter = this.props.state.filter;
        const filtered_songs = this.props.state.songs
            .filter((song) => {
                return (filter.selected_author ? song.author === filter.selected_author : true) &&
                    (filter.selected_genre ? song.genre === filter.selected_genre : true) &&
                    (filter.selected_year ? song.year === filter.selected_year : true)
            });

        return (
            <BootstrapTable data={filtered_songs} keyField='id' striped={true} hover={true} pagination>
                <TableHeaderColumn dataField="author" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Song</TableHeaderColumn>
                <TableHeaderColumn dataField="genre" dataSort={true}>Genre</TableHeaderColumn>
                <TableHeaderColumn dataField="year" dataSort={true}>Year</TableHeaderColumn>
            </BootstrapTable>
        )
    }

}

export default SongsTable;