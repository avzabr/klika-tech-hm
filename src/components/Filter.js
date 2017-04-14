import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Filter extends Component {

    render() {
        const itemName = this.props.itemName
        const title = 'Filter by ' + itemName;
        const items = this.props.items.map((item) => {
            return <MenuItem key={item} eventKey={item}
                active={this.props.selected_item === item}>{item}</MenuItem>
        })
        return (
            <DropdownButton bsSize="small"
                title={this.props.selected_item ? this.props.selected_item : title}
                id="filter-{this.props.itemName}" onSelect={this.props.filterFunction}>
                {items}
                <MenuItem divider />
                <MenuItem key={'CLEAR'} eventKey={'CLEAR'}>Clear</MenuItem>
            </DropdownButton>
        )
    }
}

export default Filter;