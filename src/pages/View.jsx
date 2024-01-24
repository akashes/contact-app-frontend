import axios from 'axios'
import React, { useEffect, useState } from 'react'
import serverUrl from '../services-frontend/serverUrl'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/view.css'
import {

  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Container,Row,Col } from 'react-bootstrap';
import image from '../assets/latest.png'

function View() {
const {id} = useParams()
const navigate=useNavigate()
const[contactDetail,setContactDetail]=useState([])
const handleGetAContactDetail = async () => {
    try {
      const {data} = await axios.get(`${serverUrl}/get-a-contact/${id}`);
      setContactDetail(data.data[0])
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  };
  console.log(contactDetail);

  const handleContactDelete=(e)=>{
    e.preventDefault()
    axios.delete(`${serverUrl}/delete-a-contact/${id}`).then((result)=>{
      console.log(result);
      navigate('/home')
    }).catch((error)=>{
      console.log(error);
      navigate('/home')
    })
  }
  

    useEffect(()=>{
        handleGetAContactDetail()

    },[])
  return (
      <Container className='rounded shadow p-5 m-5 viewContainer' style={{minHeight:'80vh',backgroundColor:''}}>
       {
        contactDetail && (
          <Row   className='rounded  p-5 m-5 viewRow' >
          <Col className='d-flex justify-content-center align-items-center'>
          <img className='w-100 viewImage' src={image}alt="" />
          </Col>
          <Col>
          <MDBCard className='viewCard' alignment='center'>
      <MDBCardHeader className='fw-bold fs-3'>{contactDetail?.name?.toUpperCase()}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>
          <p>{contactDetail.phone}                     <a href={`tel:+${contactDetail.phone}`}> <i className="fa fa-phone text-success ms-2"></i> </a>
  </p>
          <p>{contactDetail.email}                 <a href={`mailto:${contactDetail.email}`}>  <i className="fa-solid fa-envelope text-secondary ms-3"></i></a>
 </p>

        </MDBCardTitle>
        <MDBCardText>
          <hr />
          <div className="address d-flex flex-column justify-content-evenly align-items-center ">
            <h2 className='text-secondary'>Address <i class="fa-solid fa-house-chimney"></i></h2>
            <span className='fw-bold'>{contactDetail.address}</span>

            <span className='fw-bold'>{contactDetail.zipcode}</span>
          </div>

        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='text-muted d-flex justify-content-around'>
        <i onClick={()=>navigate(`/edit/${contactDetail.id}`)} className="fa-solid fa-pen-to-square"></i>
        <i onClick={(e)=>handleContactDelete(e)} className="fa fa-trash text-danger"></i>
      </MDBCardFooter>
    </MDBCard>

          </Col>
        </Row>


        )
       }
      </Container>
  )
}

export default View
