import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import serverUrl from '../services-frontend/serverUrl'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import '../styles/contactCards.css'

  import { useNavigate } from 'react-router-dom';


  
function ContactCards() {
    const [contactCards,setContactCards]=useState([])
    const randColors=['80A1C1','EEE3AB','BA3F1D','922D50','22AAA1','4CE0D2','F0E7D8','DFA06E','2292A4','D96C06']
    const navigate=useNavigate()
    
    const handleGetAllContacts=async()=>{
        const {data} =await axios.get(`${serverUrl}/get-contact-data`)
        setContactCards(data.data)


    }
    console.log(contactCards);
   
    
useEffect(()=>{
    handleGetAllContacts()
},[])
  return (
    <div>
    <Row className='my-3'>
      {
        contactCards?.length>0 ?
        contactCards.map((contact)=>(
            <Col className='' sm={12} md={6} lg={4} xl={3}>
                 <MDBCard className='contact-card my-3' onClick={()=>navigate(`/view/${contact.id}`)} style={{position:'relative',width:'220px', height:'250px'}} alignment='center'>
            <div className='d-flex justify-content-center p-3'>
                <div className='d-flex justify-content-center align-items-center fw-bold' style={{backgroundColor:'#'+randColors[Math.floor(Math.random()*randColors.length)],borderRadius:'50%',height:'50px',width:'50px'}}>{contact.name.charAt(0).toUpperCase()}</div>
            </div>
            <MDBCardBody>
              <MDBCardTitle className='d-flex flex-column justify-content-between align-items-center' >
                <p className='fw-bold'>{contact.name} </p>
                {contact.phone}
                 </MDBCardTitle>
              <MDBCardText>{contact.email} 

               </MDBCardText>
             
             
            </MDBCardBody>
          </MDBCard>
            </Col>
           
        )) : <p className="text-center text-danger">Loading...</p>
      }
    </Row>
  
</div>
   
  )
}


export default ContactCards
