import React, { Component } from 'react';

export default class List extends Component {
  render() {

    const { data, filterText } = this.props

    const listItems = data.colors
      .filter(name => {
        return name.color.indexOf(filterText) >= 0
      })
      .map((color) =>
      <li key={color.color}>
        <span style={{background: color.hex}}></span>
        <span>
          {color.color} <br/>
          <span style={{opacity: .6}}>{color.hex}</span>
        </span>
      </li>
    )

    return(
      <ul>
        {listItems}
      </ul>
    )
  }
}
