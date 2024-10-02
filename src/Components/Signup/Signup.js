import React from "react";
import { Col, Form } from "react-bootstrap";


const Signup = ({ label, type, placeholder }) => {
  return (
   
        <Col xs={4} md={4} lg={4}>
          <Form style={{ width: "20rem",paddingTop:'3rem' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {label}
              </Form.Label>
              <Form.Control type={type} placeholder={placeholder} />
            </Form.Group>
          </Form>
        </Col>
     
 
  );
};

export default Signup;
