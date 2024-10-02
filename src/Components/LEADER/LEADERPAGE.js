import React from "react";
import { Container, Row } from "react-bootstrap";
import 'react-circular-progressbar/dist/styles.css';
import photo from '../../images/photo.jpeg'
import Leader from "./Leader";

const LEADERPAGE = ({ value }) => {
  return (
    <Container style={{maxHeight:'576'}}>
     <Row >
          <h1 style={{display:'flex',justifyContent:'center',paddingTop:'5rem',fontWeight:'bold'}}>ASSESS</h1>
     </Row> 
     <Row style={{display:'flex',paddingTop:'10rem'}}><div >  
            <h2 style={{backgroundColor:'yellow', borderRadius:'5rem',width:'20rem',height:'5rem',textAlign:'center'}}>Check your performance</h2>
     </div>
     </Row>
      <Row xs={4} md={6} lg={8} style={{display:'flex',justifyContent:'end',fontWeight:'5rem' ,paddingTop:'0rem'}}>
      <Leader value={50} name='mina'/>
      <Leader value={100} name='zki'/>
      <Leader value={100} name='shadi'/>
      </Row>
      
    </Container>
  );
};

export default LEADERPAGE;
