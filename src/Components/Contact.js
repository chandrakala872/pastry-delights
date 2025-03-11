


import React from 'react'
import { useState } from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-solid-svg-icons'


function Contact() {
 
  return (
    <div>
      <div className='Container'>
<div className='row'>
  <div className='col-md-7'>
    <div className='mb-3'>
    <label for="exampleFormControlInput1">Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
    </div>
    <div className='mb-3'>
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
    </div>
    <div className='mb-3'>
    <label for="exampleFormControlInput1">Contact Number</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your number"/>
    </div>
   
    
    <div className='mb-3'>
    <label for="exampleFormControlTextarea1" className='form-label'>Message</label>
    <textarea className='form-control' id='exampleFormControlarea1' rows='3'></textarea>
</div>
<button className='btn btn-primary'>Send</button>
{/* <button className='btn btn-primary ml-5'>Logout</button> */}

  </div>
  <div className='col-md-5'>
  <h4>Contactus</h4><hr></hr>
  <div className='mt-5'>
    <div className='d-flex '>
      <div><FontAwesomeIcon icon={faLocation} /> </div>
    <p>Address:west 21 street Gachibowli</p>

    </div>
    <div className='d-flex'>
      <div className='bi'><FontAwesomeIcon icon={faEnvelope} /> </div>
    <p>Email:Pastrydelights@gmail.com</p>
    
    </div>
    <div className='d-flex'>
      <div><FontAwesomeIcon icon={faPhone} /> </div>
    <p>Contact:9999999999</p>
    
    </div>
    <div className='d-flex'>
      <div><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></div> 
    <p>website:www.pastrydelights.com</p>
    
    </div>
   
   
   

</div>

  </div>

</div>
      </div>
    </div>
  )
}

export default Contact



