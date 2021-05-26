import React from 'react'
import emailjs from 'emailjs-com'
import { Form, Button } from 'react-bootstrap'

function fun() {
  document.getElementById('from_name').value = ''
  document.getElementById('user_platform').value = ''
  document.getElementById('user_os').value = ''
  document.getElementById('user_email').value = ''
  document.getElementById('user_ip').value = ''
  document.getElementById('message').value = ''
}

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
          alert(error.text)
        }
      )
    fun()
  }

  return (
    <Form id="contact-form" className="contact-form" onSubmit={sendEmail}>
      <Form.Group>
        <Form.Control type="hidden" name="contact_number" />
        <Form.Label>Company Name</Form.Label>
        <Form.Control id="from_name" type="text" name="from_name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control id="user_platform" type="text" name="user_platform" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control id="user_os" as="textarea" name="user_os" rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control id="user_email" type="email" name="user_email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Requested Service</Form.Label>
        <Form.Control id="user_ip" as="select" name="user_ip">
          <option>Training</option>
          <option>Consulting</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control id="message" as="textarea" name="message" rows={3} />
      </Form.Group>
      <Button variant="primary" value="Send" type="submit">
        Submit
      </Button>
    </Form>
  )
}
