import React,{Component} from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'


class ProductTable extends Component {


  render () {

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {


      if (product.name.toLowerCase().indexOf(this.props.filtredText.toLowerCase()) === -1) {
        return;
      }
      if (this.props.onlyInStock && !product.stocked) {
        return;
      }


      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow key={product.category} categoryName={product.category} />
        )
      }

    

      lastCategory = product.category;

      rows.push(
        <ProductRow key={product.name} product={product} />
      )

    })



    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )

  }


}

export default ProductTable;