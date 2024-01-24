import React, { useEffect, useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import serverUrl from '../services-frontend/serverUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Edit() {
    const {id}=useParams()
    const[contactDetail,setContactDetail]=useState()
    const navigate=useNavigate()

  

    const handleGetAContactDetail = async () => {
        try {
          const {data} = await axios.get(`${serverUrl}/get-a-contact/${id}`);
          setContactDetail(data.data[0])
        } catch (error) {
          console.error('Error fetching contact data:', error);
        }
      };

      console.log(contactDetail);
      const handleForm=(e)=>{
        const{name,value}=e.target
        if(name=='name'){
            setContactDetail({...contactDetail,name:value})
        }else if(name=='username'){
          setContactDetail({...contactDetail,username:value})
        }else if(name=='address'){
          setContactDetail({...contactDetail,address:value})
        } else if(name=='phone'){
            setContactDetail({...contactDetail,phone:value})
        }else if(name=='email'){
            setContactDetail({...contactDetail,email:value})
        }else if(name=='zipcode'){
          setContactDetail({...contactDetail,zipcode:value})
        }

      }
      const handleContactUpdation=async(e)=>{
        e.preventDefault()
        const {id,name,username,phone,email,address,zipcode}=contactDetail
        console.log(id,name,username,phone,email,address,zipcode);
        const body={
          id,name,username,phone,email,address,zipcode
            
        }
       
         const result=await axios.post(`${serverUrl}/edit-a-contact/${id}`,body).then((result)=>{
          console.log(result.data.data);
          navigate('/home')
          

         }).catch((error)=>{
          console.log(error);
         })
        

      }

    useEffect(()=>{
        handleGetAContactDetail()
    
    },[])
  return (
    <div style={{minHeight:'80vh'}}>
        <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
        <Form className='border border-secondary rounded shadow-lg p-5 m-5 w-50'>
            <h2 className='text-center text-success'>Edit Contact</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control muted name='id' onChange={handleForm} value={contactDetail?.id} type="text" placeholder="Enter id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control muted name='name' onChange={handleForm} value={contactDetail?.name} type="text" placeholder="Enter id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='username' onChange={handleForm} value={contactDetail?.username} type="text" placeholder="Enter UserName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='phone' onChange={handleForm} value={contactDetail?.phone} type="text" placeholder="Enter PhoneNumber" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='email' onChange={handleForm} value={contactDetail?.email} type="text" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='address' onChange={handleForm} value={contactDetail?.address} type="text" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='zipcode' onChange={handleForm} value={contactDetail?.zipcode} type="text" placeholder="Enter Email" />
      </Form.Group>
     

<p  className='text-center'><button onClick={(e)=>handleContactUpdation(e)} className="btn btn-outline-success rounded shadow ">Update</button></p>
      
    </Form>

        </div>
       
      
    </div>
  )
}

export default Edit
