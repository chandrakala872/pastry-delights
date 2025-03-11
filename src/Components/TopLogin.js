import React from "react";
  import "./TopLogin.css";
import { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const navigate = useNavigate();
  const handleregister = () => {
    navigate("/Register");
  };

  const [gmail, setgmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", gmail);
    console.log("Password:", password);


    try {
      let response = await axios.post("http://localhost:3002/login", {
        gmail: gmail,
        password: password,
      });
      console.log(response);
      alert(response.data);
      if(response.data === "Login Successfull")
      {
        navigate('/')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              id="email"
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
            </Button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
       <center> <Button onClick={handleregister} id="but" color="primary">
        REGISTER
      </Button>
      </center>
      </form>
      
    </div>
  );
}

export default Loginpage;







