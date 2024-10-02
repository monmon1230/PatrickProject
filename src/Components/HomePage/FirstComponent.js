import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FirstComponent = () => {
  return (<Col>
    <Row style={{ fontSize: "4rem", paddingLeft: "3.5rem", color: "burlywood",display:"grid" }} >
      <div
        
      >
        Don't know how to get ajob ? we got you!
      </div>
    </Row>
    <Row  style={{paddingLeft:'6rem',paddingTop:'8rem'}}>
    <Link to='/signup'> <Button variant="primary" style={{width:'10rem',borderRadius:'5rem',height:'3rem'}}>sign up</Button></Link> 
    </Row>
    </Col>
  );
};

export default FirstComponent;
