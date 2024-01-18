import React from "react";
import axiosClient from './plugins/axiosClient'
import { useState } from "react";
import { useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function SuperAdmin () {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState()
  const [isDiploma, setIsDiploma] = useState(true)
  const [address, setAddress] = useState('')

  const addUser = (e) => {
    e.preventDefault()
    let payload = {
      name: name,
      surname: surname,
      age: age,
      isDiploma: isDiploma,
      address: address,
    }
    setUsers([...users, {...payload}])
    axiosClient.post('/users/add', {...payload}).then(res => {
      console.log(res.data)
      if(res.status === 201){
        window.location.reload()
      }
    }).catch((err) => {
      console.log(err)
    })
    setModal(false)
    setName('')
    setSurname('')
    setAge('')
    setAddress('')
    setIsDiploma('')
  }

  useEffect(() =>{
    axiosClient.get('/users').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const delFunc = (index) => {
      users.splice(index, 1)
      setUsers([...users])
  }


  return (
    <div>



      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader>
          Add Users Panel
        </ModalHeader>
        <ModalBody>
          <form id="formModal" onSubmit={(e) => addUser(e)}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control my-2"/>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" className="form-control my-2"/>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="form-control my-2"/>
            <input type="text" value={isDiploma} onChange={(e) => setIsDiploma(e.target.value)} placeholder="Diplom" className="form-control my-2"/>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="form-control my-2"/>
          </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-success" onClick={addUser}>Add</button>
        </ModalFooter>
      </Modal>




      <div className="container">
        <button onClick={() => setModal(true)} className="btn btn-primary my-2">Add user</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>isDiploma</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((item, index) => {
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.age}</td>
                  <td>{item.isDiploma ? 'True' : 'False'}</td>
                  <td>{item.address}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => delFunc(index)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}













// import React, { useEffect, useState } from "react";
// import axiosClient from "./plugins/axiosClient";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// export default function Admin() {
//   const [users, setUsers] = useState([]);
//   const [openModal, setOpenModal] = useState(false);

//   useEffect(() => {
//     axiosClient.get("/users").then((res) => {
//       console.log(res.data);
//       setUsers(res.data);
//     }).catch((err) => {
//       console.log(err)
//     })
//   }, []);

//   const addUsersFunc = (e) => {
//     e.preventDefault()
//     let payload = {
//       name: e.target[0].value,
//       surname: e.target[1].value,
//       age: +e.target[2].value,
//       isDiploma: true,
//       address: e.target[4].value,
//     }

//     setUsers(payload)
//     axiosClient.post("/users/add", {...payload}).then((res) => {
//       if(res.status === 201){
//         window.location.reload()
//       }
//       }).catch((err) => {
//         console.log(err)
//       })
//   };
//   return (
//     <div>
//       <Modal isOpen={openModal} toggle={() => setOpenModal(false)}>
//         <ModalHeader>Fill the blanks</ModalHeader>
//         <ModalBody>
//           <form id="fillBlanks" onSubmit={addUsersFunc}>
//             <input type="text" placeholder="Name" className="form-control my-2"/>
//             <input type="text" placeholder="Surname" className="form-control my-2" />
//             <input type="number" placeholder="Age" className="form-control my-2" />
//             <select className="form-control my-2" >
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//             <input type="text" placeholder="Address"className="form-control my-2" />
//           </form>
//         </ModalBody>
//         <ModalFooter>
//           <button form="fillBlanks" type="submit" className="btn btn-primary my-2" > Add </button>
//         </ModalFooter>
//       </Modal>
//       <h1>Admin</h1>
//       <div className="container">
//         <button onClick={() => setOpenModal(true)} className="btn btn-success my-2" >  Add User </button>
//         <div className="parent">
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Surname</th>
//                 <th>Age</th>
//                 <th>iS_Diploma</th>
//                 <th>Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{item.name}</td>
//                     <td>{item.surname}</td>
//                     <td>{item.age}</td>
//                     <td>{item.isDiploma}</td>
//                     <td>{item.address}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
