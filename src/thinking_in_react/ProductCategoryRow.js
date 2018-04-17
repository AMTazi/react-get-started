import React from 'react'

export default function ProductCategoryRow ({categoryName})  {
  return (
     <tr>
       <th colSpan="2">{categoryName}</th>
     </tr>
   )
}
