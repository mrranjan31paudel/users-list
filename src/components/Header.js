import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    const {onSearchChange} = this.props;
    return (
      <header className="page-header">
        <p>People</p>
        <input className="search-bar" placeholder="Search People" onChange={(e) => onSearchChange(e.target.value.toLowerCase())} value={this.props.searchString}></input>
      </header>
    )
  }
}

export default Header;