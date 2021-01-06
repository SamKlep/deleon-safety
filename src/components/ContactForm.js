import React from 'react'
import emailjs from 'emailjs-com'
import { Form, Button } from 'react-bootstrap'

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'contact_form', e.target, 'user_55YYmU3urijwaiV2s1l3i')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Form className='contact-form' onSubmit={sendEmail}>
      <Form.Group>
        <Form.Control type='hidden' name='contact_number' />
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='from_name' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control as='textarea' name='user_os' rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' name='user_email' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Requested Service</Form.Label>
        <Form.Control as='select' name='user_ip'>
          <option>Training</option>
          <option>Consulting</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' name='message' rows={3} />
      </Form.Group>
      <Button variant='primary' value='Send' type='submit'>
        Submit
      </Button>
    </Form>
  )
}
