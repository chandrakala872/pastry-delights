import React, { useState } from 'react';
import { Button, Input, Label, FormGroup, Form,Col ,Row} from 'reactstrap';
import axios from 'axios';
import{Link}from 'react-router-dom'
 import './TopRegister.css'
// import { useNavigate } from 'react-router-dom';

function Register(args) {
  const [modal, setModal] = useState(false);

//   const navigate = useNavigate()
    let [formdata,setFormdata] = useState({
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: ""
        
  })
  
    const handlesubmit = async(e) => {
      e.preventDefault();
       try {
          let response = await axios.post("http://localhost:3002/register", formdata)
         console.log(response)
         alert(response.data)
         setFormdata("")
         if (response.status === 200) {
        //    navigate('/Login')
         }

         setFormdata({
          email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: ""
         })
        

      } catch (err) {
          console.log(err)
      }

    }
    const handleFormdata = (e) => {
        let { name, value }=e.target
        setFormdata({
            ...formdata,
            [name]:value
        })
        console.log(formdata)
    }
  const toggle = () => setModal(!modal);
  return (
    <div className='Main-box5 mt-5'>
      <div id='Form'>
        <h3>
     <Form  onSubmit={handlesubmit}>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
           id="exampleEmail"
            name="email"
           placeholder="Email"
           type="email"
           value={formdata.email}
           onChange={handleFormdata}
           required
       
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password"
          type="password"
         value={formdata.password}
          onChange ={handleFormdata }
          required                    
     
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Address
    </Label>
    <Input
      id="exampleAddress"
      name="address"
     placeholder="1234 Main St"
     value={formdata.adderss}
     onChange={ handleFormdata }
      required                
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          City
        </Label>
        <Input
          id="exampleCity"
          name="city"
          value={formdata.city}
          onChange= { handleFormdata }
           required                   
                              
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
          value={formdata.state}
          onChange={ handleFormdata }
          required                   
                              
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="exampleZip">
          Zip
        </Label>
        <Input
          id="exampleZip"
          name="zip"
          value={formdata.zip}
          onChange= { handleFormdata }
           required                   
                              
        />
      </FormGroup>
    </Col>
  </Row>
  
  <Button id='Signin' isOpen={modal} toggle={toggle} {...args}>
   <h4>Register</h4>

  </Button>
  <div> <Link id="Register"to="/login">Login</Link></div>
          </Form>
          </h3>
        </div>
    </div>
  )
}

export default Register







    




              
          
              
                 

                

                  
                 

              

               

                
               
                

    
    
        
      
  
        
      
          
      
      

   




           

          
                 
            

     
    
    
       
       

