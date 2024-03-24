import React, { useState } from 'react';

function ContactForm({ addContact, setShowForm }) {
    const [newContact, setNewContact] = useState({ name: '', lastName: '', phone: '' });

    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(newContact);
        setNewContact({ name: '', lastName: '', phone: '' });
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input className='input' name='name' value={newContact.name} onChange={handleChange} placeholder='name' required />
            <input className='input' name='lastName' value={newContact.lastName} onChange={handleChange} placeholder='last name' />
            <input className='input'name='phone' value={newContact.phone} onChange={handleChange} placeholder='phone' required />
            <button type='submit' className='button save-button'>Save</button>
            <button type='button' onClick={() => setShowForm(false)} className='button cancel-button'>Cancel</button>
        </form>
    );
}

export default ContactForm;