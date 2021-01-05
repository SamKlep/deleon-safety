import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default class QuoteForm extends React.Component {
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
        action='https://formspree.io/f/xpzokwzo'
        method='POST'>
        <div className='form-group'>
          <label>Date</label>
          <input type='text' name='date' />
          <label>Company Name</label>
          <input type='text' name='companyName' />
          <label>Address</label>
          <input type='text' name='address1' />

          <input type='text' name='address2' />
          <label>City</label>
          <input type='text' name='city' />
          <label>State/Province</label>
          <input type='text' name='state' />
          <label>Zip/Postal Code</label>
          <input type='text' name='zipcode' />
          <label>Country</label>
          <input type='text' name='country' />
          <label>Name</label>
          <input type='text' name='name' />
          <label>Email</label>
          <input type='text' name='email' />
          <label>Requested Service</label>
          <div class='form-check'>
            <input className='form-check-input' type='radio' name='services' />
            <label className='form-check-label'>Training</label>
          </div>
          <div class='form-check'>
            <input className='form-check-input' type='radio' name='services' />
            <label className='form-check-label'>Consulting</label>
          </div>
          <label>Comments/Questions</label>
          <textarea
            className='form-control'
            rows='6'
            type='text'
            name='message'
          />
          {status === 'SUCCESS' ? <p>Thanks!</p> : <Button>Submit</Button>}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </div>
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
