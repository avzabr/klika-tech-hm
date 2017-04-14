import React, { Component } from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";

class Filter extends Component {

    render() {
        const title = 'Filter by ' + this.props.itemName;
        return (
            <DropdownButton bsSize="small"
                title={this.props.selected_item ? this.props.selected_item : title}
                id="filter-{this.props.itemName}" onSelect={this.props.filterFunction}>
                {this.props.items}
                <MenuItem divider />
                <MenuItem key={'CLEAR'} eventKey={'CLEAR'}>Clear</MenuItem>
            </DropdownButton>
        )
    }
}

export default Filter;