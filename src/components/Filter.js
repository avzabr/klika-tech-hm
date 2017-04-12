import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class Filter extends Component {

    render() {
        return (
            <div >
                <ButtonToolbar>
                    <DropdownButton bsSize="small" title="Filter by Author" id="filter-author">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                    <DropdownButton bsSize="small" title="Filter by Year" id="filter-year">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                    <DropdownButton bsSize="small" title="Filter by Genre" id="filter-genre">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }


};

export default Filter;