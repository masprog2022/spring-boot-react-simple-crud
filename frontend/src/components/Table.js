import React from 'react'

export default function Table( {product, select} ) {
  return (
    <div>
         <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Produto</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
             <tbody>
                  {
                    product.map((obj, index) => (
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{obj.name}</td>
                        <td>{obj.brand}</td>
                        <td><button onClick={() => {select(index)}} className='btn btn-success'>Selecionar</button></td>
                    </tr>
                    ))
                  }
             </tbody>
         </table>
    </div>
  )
}
