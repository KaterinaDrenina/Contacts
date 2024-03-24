import React from 'react';

function ContactsTable({ contacts, deleteContact }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='th'>Name</th>
                    <th className='th'>Last Name</th>
                    <th className='th'>Phone</th>
                    <th className='th'>Action</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(({ id, name, lastName, phone }) => (
                    <tr key={id} className='tr'>
                        <td className='td'>{name}</td>
                        <td className='td'>{lastName}</td>
                        <td className='td'>{phone}</td>
                        <td className='td'>
                            <button className='button delete-button' onClick={() => deleteContact(id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ContactsTable;