import profile from "../photo/profile.png";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./login.css";
import React,{ useState } from "react";
// import { Profile } from "./profile";
export const Login = () => {
  const [info, setinfo] = useState({email:"",contact:"",password:"",name:""});
  const handleInfo=(info)=>{
const name=info.target.name;
const value=info.target.value;
setinfo((ele)=>({...ele,[name]:value})) 
  }
  const handleSubmit=(curr)=>{
    curr.preventDefault();
    

    
      
   
    
  }
  return (
    <>
      <div className="fakeheader"></div>
      <div className="fakebody">
        <Card className="card" style={{ width: "25rem", border: "none" }}>
          <Card.Img variant="top" src={profile} />
          <Card.Body>
            <Card.Title style={{ marginTop: "25px", marginBottom: "20px" }}>
              Login or Singup{" "}
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control autoComplete="off" type="email" name="email" placeholder="Enter email" required value={info.email} onChange={handleInfo}/>

                <br></br> <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text" name="name"
                  placeholder="Enter Name"
                  required
                  value={info.name} onChange={handleInfo}
                />
                  <br></br>
                <Form.Label>Contact No.</Form.Label>
                <Form.Control
                  type="number" name="contact"
                  placeholder="+91  |  Mobile Number*"
                  required
                  value={info.contact} onChange={handleInfo}
                />
              
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"name="password" placeholder="Password" value={info.password} onChange={handleInfo}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <span>Have trouble logging in? </span>
              <a className="color" href="https://www.myntra.com/contactus">
                <span> Get help</span>
              </a>
              <br></br>
              <button type="submit" className="button3">Submit</button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      
    </>
  );
};
