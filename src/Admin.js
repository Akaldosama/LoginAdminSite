import React, { useEffect, useState } from 'react'
import axiosClient from './plugins/axiosClient'
import ProductsModal from './ProductsModal'

export default function Admin() {
    const [modal, setModal] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
      axiosClient.get('/products').then((res) =>{
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }, [])

    const delFunc = (index) => {
      products.splice(index, 1)
      setProducts([...products])
  }



  return (
    <div>
        <ProductsModal modal={modal} setModal={setModal} toggle={() => setModal(false)} products={products} setProducts={setProducts}/>

        <div className="container">
          <button className='btn btn-info my-3' onClick={() => setModal(true)}>Add Product</button>
            <div className="parent">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Group</th>
                            <th>Price</th>
                            <th>Arrival Price</th>
                            <th>Selling Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        products.map((item, index) => {
                          return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.brand}</td>
                            <td>{item.group}</td>
                            <td>{item.price}</td>
                            <td>{item.arrival_price}</td>
                            <td>{item.selling_price}</td>
                            <td>{item.description}</td>
                            <td>
                              <button className='btn btn-danger' onClick={() => delFunc(index)}>Delete</button>
                            </td>
                          </tr>
                        })
                      }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
