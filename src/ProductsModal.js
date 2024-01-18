import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axiosClient from './plugins/axiosClient'

export default function ProductsModal({modal, toggle, setModal, products, setProducts}) {

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [group, setGroup] = useState('')
    const [price, setPrice] = useState()
    const [arrival_price, setArrivalPrice] = useState()
    const [selling_price, setSellingPrice] = useState()
    const [description, setDescription] = useState('')


    const addProduct = (e) => {
        e.preventDefault()
        let payload = {
            name: name,
            brand: brand,
            group: group,
            price: +price,
            arrival_price: +arrival_price,
            selling_price: +selling_price,
            description: description,
        }
        console.log(payload)
        setProducts([...products , {...payload}])

        axiosClient.post('/products/add', {...payload}).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        setModal(false)

        setName('')
        setBrand('')
        setGroup('')
        setPrice('')
        setArrivalPrice('')
        setSellingPrice('')
        setDescription('')
    }


  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>
                Add Products
            </ModalHeader>
            <ModalBody>
                <form>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control my-2' />
                    <select className='form-control my-2'  value={brand} onChange={(e) => setBrand(e.target.value)} >
                        <option value="" hidden>Select your brand</option>
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="acer">Acer</option>
                    </select>
                    <select className='form-control my-2'  value={group} onChange={(e) => setGroup(e.target.value)} >
                        <option value="" hidden>Select your group</option>
                        <option value="mobile">Mobile</option>
                        <option value="tv">TV</option>
                    </select>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}  placeholder='Price' className='form-control my-2' />
                    <input type="number" value={arrival_price} onChange={(e) => setArrivalPrice(e.target.value)}  placeholder='Arrival Price' className='form-control my-2' />
                    <input type="number" value={selling_price} onChange={(e) => setSellingPrice(e.target.value)}  placeholder='Selling Price' className='form-control my-2' />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder='Description' className='form-control my-2' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-success' onClick={addProduct}>Add</button>
            </ModalFooter>
        </Modal>

        
    </div>
  )
}
