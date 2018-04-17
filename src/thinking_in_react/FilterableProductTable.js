import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


class  FilterableProductTable extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      onlyInStock:false,
      filteredText:''
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this)


  }

   handleFilterTextChange (value) {
    this.setState({
      filteredText: value,
    })
  }

  handleInStockChange (value) {
    this.setState({
      onlyInStock: value,
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          onlyInStock={this.state.onlyInStock} 
          filtredText={this.state.filteredText} 
          onFiltredTextChange={this.handleFilterTextChange} 
          onOnlyInStockChange={this.handleInStockChange}
        />
        <ProductTable products={this.props.products} onlyInStock={this.state.onlyInStock} filtredText={this.state.filteredText} />
      </div>
    )
  }
}




export default FilterableProductTable
