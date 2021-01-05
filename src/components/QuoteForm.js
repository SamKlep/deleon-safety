import React from 'react'
import { Button } from 'react-bootstrap'

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
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/f/xpzokwzo'
        method='POST'>
        <div className='form-group'>
          <label>Date</label>
          <input type='text' name='date' />
        </div>
        <div className='form-group'>
          <label>Company Name</label>
          <input type='text' name='companyName' />
        </div>
        <div className='form-group'>
          <label>Address</label>
          <input type='text' name='address1' />

          <input type='text' name='address2' />
        </div>
        <div className='form-group'>
          <label>City</label>
          <input type='text' name='city' />
        </div>
        <div className='form-group'>
          <label>State/Province</label>
          <input type='text' name='state' />
        </div>
        <div className='form-group'>
          <label>Zip/Postal Code</label>
          <input type='text' name='zipcode' />
        </div>
        <div className='form-group'>
          <label>Country</label>
          <input type='text' name='country' />
        </div>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' name='name' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='text' name='email' />
        </div>
        <div className='form-group'>
          <label>Requested Service</label>
          <div className='form-check'>
            <input className='form-check-input' type='radio' name='services' />
            <label className='form-check-label'>Training</label>
          </div>
          <div className='form-check'>
            <input className='form-check-input' type='radio' name='services' />
            <label className='form-check-label'>Consulting</label>
          </div>
        </div>
        <div className='form-check'>
          <label>Comments/Questions</label>
          <textarea
            className='form-control'
            rows='6'
            type='text'
            name='message'
          />
        </div>
        {status === 'SUCCESS' ? <p>Thanks!</p> : <Button>Submit</Button>}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
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
