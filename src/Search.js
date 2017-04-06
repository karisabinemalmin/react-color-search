import React, { Component } from 'react';

export default class Search extends Component {

  handleChange() {
    const value = this.refs.searchbar.value;
    this.props.filterUpdate(value)
  }

  filterUpdate(value) {
    this.setState({
      value: this.refs.searchbar.value
    })
  }

  render() {
    return(
      <form>
        <input
          type="text"
          placeholder="Search a color"
          ref="searchbar"
          onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }
}
