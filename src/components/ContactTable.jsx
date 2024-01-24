import React, { useEffect, useState } from 'react'
import serverUrl from '../services-frontend/serverUrl'
import axios from 'axios'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import '../styles/contactTable.css'

function ContactTable() {
    const[allContacts,setAllContacts]=useState([])
    const[tableUpdatedView,setTableUpdatedView]=useState(false)
    const navigate= useNavigate()



    const handleGetAllContacts=async()=>{
        const result=await axios.get(`${serverUrl}/get-contact-data`)
        console.log(result.data.data);
        setAllContacts(result.data.data)


    }

    const handleDelete=(id)=>{
      axios.delete(`${serverUrl}/delete-a-contact/${id}`).then((result)=>{
        console.log(result);
        setTableUpdatedView((prev)=>!prev)
      }).catch((error)=>{
        console.log(error);
      })

    }
    useEffect(()=>{
        handleGetAllContacts()

    },[tableUpdatedView])
  return (
    <div>
         <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Phone.No</th>
          <th scope='col'>Email</th>
          <th scope='col'>zipCode</th>
          <th className='text-center' scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
                    allContacts.length>0 ?
                    (
                        allContacts.map((contact)=>{
                            return(
                                <>
                                <tr>
                                <td>
                                  <div className='d-flex align-items-center'>
                                    {/* <img
                                      src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                      alt=''
                                      style={{ width: '45px', height: '45px' }}
                                      className='rounded-circle'
                                    /> */}
                                    <div className='ms-3'>
                                      <p className='fw-bold mb-1'>{contact.name.toUpperCase()}</p>
                                      <p className='text-muted mb-0'>{contact.email}</p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p className='fw-normal mb-1'>{contact.phone}</p>
                                </td>
                                <td>
                                  {contact.email}
                                </td>
                                <td>{contact.zipcode}</td>
                                <td >
                                  <div className="container d-flex justify-content-evenly align-items-center">
                                  <i onClick={()=>navigate(`/view/${contact.id}`)}  className="fas fa-eye"></i>
                                  <i onClick={()=>navigate(`/edit/${contact.id}`)} className="fas fa-edit"></i>
                                  <i onClick={()=>handleDelete(contact.id)} className="fas fa-trash"></i>
                                  </div>

                                 
                                </td>
                              </tr>
                             
                              </>
                            )
        
                        })
                    ) : <p>loading</p>
                }
       
      </MDBTableBody>
    </MDBTable>
        
    
    </div>
  )
}

export default ContactTable
