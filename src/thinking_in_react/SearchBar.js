import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFiltredTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onOnlyInStockChange(e.target.checked);
  }


  render() {
    const filterText = this.props.filtredText;
    const inStockOnly = this.props.onlyInStock;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
           />
        <label>
         <p>
            <input
            type="checkbox"
            checked={inStockOnly} 
            onChange={this.handleInStockChange}
            />
          {' '}
          Only show products in stock
         </p>
        </label>
      </form>
    );
  }
}

export default SearchBar;