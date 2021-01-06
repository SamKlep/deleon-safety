import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Company Name</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput2'>
          <Form.Label>Address</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput3'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput4'>
          <Form.Label>State/Province</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput5'>
          <Form.Label>Zip/Postal Code</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput6'>
          <Form.Label>Country</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput7'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput8'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect9'>
          <Form.Label>Requested Service</Form.Label>
          <Form.Control as='select'>
            <option>Training</option>
            <option>Consulting</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea10'>
          <Form.Label>Comments/Questions</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default ContactForm
