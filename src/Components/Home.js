import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FirstComponent from './HomePage/FirstComponent'
import SecondComponent from './HomePage/SecondComponent'

const Home = () => {
  return (
    <Container>
   <Row>    
   <Col  xs={10} md={6} lg={7}><FirstComponent/></Col>
   <Col xs={2} md={6} lg={5}><SecondComponent/></Col>

   </Row>
   </Container>
  )
}

export default Home