import React from 'react'
import '../styles/landingPage.css'
import image from '../assets/contact.jpg'
import {Row,Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import newImage from '../assets/newContact.png'

function LandingPage() {
    const navigate =useNavigate()
  return (
<Container>
<Row    className="container p-5 ">
    <Col  sm={12} md={6} lg={6} xl={6}  style={{minHeight:'80vh'}} className="hero-content d-flex flex-column align-items-start gap-3 justify-content-center">
        
    <h1  className='fw-bold text-success fs-1'>Manage your Contacts <br /> Effeciently . </h1>
    <p>"Effortlessly organize contacts, streamline communication, and boost productivity with our intuitive contact management app. Simplify connections, foster relationships, and thrive professionally</p>
    <button onClick={()=>navigate('/home')} className='rounded bg-dark text-white px-5 py-1 border-0 outline-0 '>Explore  <i className=" fa-solid fa-arrow-right text-success ms-2"></i> </button>
    </Col>
    <Col className='d-flex justify-content-center align-items-center' sm={12} md={6} lg={6} xl={6}>
        <img  className='w-100 rounded' src={newImage} alt="" />

    </Col>
   </Row>
</Container>
  )
}

export default LandingPage
