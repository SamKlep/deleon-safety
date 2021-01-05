import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    return (
      <Form
        onSubmit={this.submitForm}
        action='https://formspree.io/f/xknpkgnk'
        method='POST'>
        <label>Name</label>
        <input type='text' name='name' />
        <label>Address</label>
        <input type='text' name='address1' />
        <input type='text' name='address2' />
        <label>City</label>
        <input type='text' name='address1' />
        <label>State/Province</label>
        <input type='text' name='address1' />
        <label>Zip/Postal Code</label>
        <input type='text' name='address1' />
        <label>Country</label>
        <input type='text' name='address1' />
        <label>Phone</label>
        <input type='text' name='address1' />
        <label>Email</label>
        <input type='text' name='address1' />
        <label>Comments/Questions</label>
        <input type='text' name='message' />
        {status === 'SUCCESS' ? <p>Thanks!</p> : <Button>Submit</Button>}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </Form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
