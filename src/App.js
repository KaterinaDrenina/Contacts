import React, { useState, useEffect } from 'react';
import ContactsTable from './components/ContactsTable';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      const formattedData = data.map(({ id, name, phone }) => ({
        id,
        name: name.split(' ')[0],
        lastName: name.split(' ')[1] || '',
        phone
      }));
      setContacts(formattedData);
    });
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
    setShowForm(false);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <ContactsTable contacts={ contacts } deleteContact={ deleteContact } />
      {showForm ? (
        <ContactForm addContact={ addContact } setShowForm={ setShowForm } />
      ) : (
        <button onClick={() => setShowForm(true)} className='button add-button'>Add Contact</button>
      )}
    </div>
  );
}

export default App;
