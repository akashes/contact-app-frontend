import React, { useEffect, useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import serverUrl from '../services-frontend/serverUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Add() {
    const {id}=useParams()
    const [contactDetail,setContactDetail]=useState()
    const navigate=useNavigate()

  
    const handleForm=(e)=>{
        const {name,value}=e.target
        if(name=='id'){
            
                setContactDetail({...contactDetail,id:value})
            
        }else if(name=='name'){
            setContactDetail({...contactDetail,name:value})
        }else if(name=='username'){
            setContactDetail({...contactDetail,username:value})
        }else if(name=='phone'){
            setContactDetail({...contactDetail,phone:value})
        }else if(name=='email'){
            setContactDetail({...contactDetail,email:value})
        }else if(name=='address'){
            setContactDetail({...contactDetail,address:value})
        }else if(name=='zipcode'){
            setContactDetail({...contactDetail,zipcode:value})
        }

    }

    const handleAddContact=(e)=>{
        e.preventDefault()
        const{id,name,username,phone,email,address,zipcode}=contactDetail
        console.log(id,name,username,phone,email,address,zipcode);

        const body={id,name,username,phone,email,address,zipcode}
        axios.post(`${serverUrl}/add-a-contact`,body).then((result)=>{
            console.log(result);
            navigate('/home')
        }).catch((error)=>{
            console.log(error);
        })

    }

    //   const handleForm=(e)=>{
    //     const{name,value}=e.target
    //     if(name=='name'){
    //         setContactDetail({...contactDetail,name:value})
    //     }else if(name=='username'){
    //       setContactDetail({...contactDetail,username:value})
    //     }else if(name=='address'){
    //       setContactDetail({...contactDetail,address:value})
    //     } else if(name=='phone'){
    //         setContactDetail({...contactDetail,phone:value})
    //     }else if(name=='email'){
    //         setContactDetail({...contactDetail,email:value})
    //     }else if(name=='zipcode'){
    //       setContactDetail({...contactDetail,zipcode:value})
    //     }

    //   }
     

    useEffect(()=>{
    
    },[])
  return (
    <div style={{minHeight:'80vh'}}>
        <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
        <Form className='border border-secondary rounded shadow-lg p-5 m-5 w-50'>
            <h2 className='text-center text-success'>Add Contact</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control muted name='id' onChange={handleForm} value={contactDetail?.id || ""} type="text" placeholder="Enter id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control muted name='name' onChange={handleForm} value={contactDetail?.name || ""} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='username' onChange={handleForm} value={contactDetail?.username || ""} type="text" placeholder="Enter UserName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='phone' onChange={handleForm} value={contactDetail?.phone || ""} type="text" placeholder="Enter PhoneNumber" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='email' onChange={handleForm} value={contactDetail?.email || ""} type="text" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='address' onChange={handleForm} value={contactDetail?.address || ""} type="text" placeholder="Enter Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='zipcode' onChange={handleForm} value={contactDetail?.zipcode || ""} type="text" placeholder="Enter zipcode" />
      </Form.Group>
     

<p  className='text-center'><button onClick={(e)=>handleAddContact(e)} className="btn btn-outline-success rounded shadow ">Add</button></p>
      
    </Form>

        </div>
       
      
    </div>
  )
}

export default Add
