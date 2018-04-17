import React from 'react'

export default function ProductRow ({product})  {

  const red = {
    color: !product.stocked && 'red'
  }

  return (
    <tr>
      <td><span style={red}>{ product.name }</span></td>
      <td>{product.price}</td>
    </tr>
  )
}
