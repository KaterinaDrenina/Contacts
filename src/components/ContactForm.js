import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', lastName: '', phone: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    this.props.addContact(this.state);
    this.setState({ name: '', lastName: '', phone: '' });
    this.props.setShowForm(false);
  }

  render() {
    const { name, lastName, phone } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <input name="name" value={name} onChange={this.handleChange} placeholder="Name" required className='input'/>
        <input name="lastName" value={lastName} onChange={this.handleChange} placeholder="Last name" className='input'/>
        <input name="phone" value={phone} onChange={this.handleChange} placeholder="Phone" required className='input' />
        <button type="submit" className='button save-button'>Save</button>
        <button type="button" onClick={() => this.props.setShowForm(false)} className='button cancel-button'>Cancel</button>
      </form>
    );
  }
}

export default ContactForm;
