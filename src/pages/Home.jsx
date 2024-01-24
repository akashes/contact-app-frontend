import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ContactCards from '../components/ContactCards'
import ContactTable from '../components/ContactTable'
import serverUrl from '../services-frontend/serverUrl'
import addContact from  '../assets/addcontact.png'
import { useNavigate } from 'react-router-dom'
import Add from './Add'
function Home() {
    const[cardOrTable,setCardOrTable]=useState('card')

    // const handleGetAllContacts=async()=>{
    //     const result =await axios.get(`${serverUrl}/get-contact-data`)
    //     console.log(result.data);


    // }
    const navigate= useNavigate()
    const handleCardorTable=(e)=>{
      console.log(e.target.className);
      const classes = e.target.classList
      // e.target.className.
      if(classes.contains('cardView')){
        setCardOrTable('card')
      }else if(classes.contains('tableView')){
        setCardOrTable('table')
      }

    }
    useEffect(()=>{
        // handleGetAllContacts()

    },[])
  return (
    <div style={{minHeight:'40vh'}} className='container'>
    
      <div className="d-flex justify-content-start align-items-center mt-3">
        <button   onClick={handleCardorTable} className='btn cardView btn-info fw-bold mx-3'>Card View</button>
        <button  onClick={handleCardorTable} className=' btn tableView btn-info  fw-bold mx-3'>Table View</button>
        <div onClick={()=>navigate('/add')}  className='d-flex justify-content-center align-items-center' >
         <img height={120 } width={120} src={addContact} alt="" />
        <h6 className='text-success'>Add contact</h6>
      
    </div>
      </div>
      <Row>
          {
            cardOrTable == 'card' ? (
              <ContactCards/>

            ) : (
              <ContactTable/>
            )
          }

      
        
      </Row>

    </div>
  )
}

export default Home
