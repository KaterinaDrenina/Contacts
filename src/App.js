import React, { Component } from 'react';
import ContactsTable from './components/ContactsTable';
import ContactForm from './components/ContactForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      showForm: false,
    };

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.setShowForm = this.setShowForm.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(({ id, name, phone }) => ({
          id,
          name: name.split(' ')[0],
          lastName: name.split(' ')[1] || '',
          phone,
        }));
        this.setState({ contacts: formattedData });
      });
  }

  addContact(newContact) {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: Date.now() }]
    }));
  }

  deleteContact(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  setShowForm(show) {
    this.setState({ showForm: show });
  }

  render() {
    const { contacts, showForm } = this.state;

    return (
      <div>
        <ContactsTable contacts={contacts} deleteContact={this.deleteContact} />
        {showForm ? (
          <ContactForm addContact={this.addContact} setShowForm={this.setShowForm} />
        ) : (
          <button onClick={() => this.setShowForm(true)} className='button add-button'>Add contact</button>
        )}
      </div>
    );
  }
}

export default App;
