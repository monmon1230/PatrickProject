import React from 'react'
import {  Button, Container, Row } from 'react-bootstrap'
import Signup from './Signup'
import { colors } from '@mui/material'

const SignupContainer = () => {
  return (
    <Container>
    <Row>
    <Signup type='text' placeholder='NAME' label='Name'/>
    <Signup type='date' placeholder='DD/MM/YYYY' label='DOB'/>
    <Signup type='text' placeholder='COUNTRY' label='COUNTRY'/>
    </Row>
    <Row>
    <Signup type='EMAIL' placeholder='AM@EMAIL.COM' label='EMAIL'/>
    <Signup type='text' placeholder='ASSUIT PUBLIC PAEP SCHOOL' label='SCHOOL'/>
    <Signup type='number' placeholder='grade' label='grade'/>
    </Row>
    <Row style={{display:'flex',justifyContent:'center'}}>
        <Button style={{width:'15rem',borderRadius:'3rem'}}>submit</Button>
    </Row>
    </Container>
  )
}

export default SignupContainer