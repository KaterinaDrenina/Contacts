import React, { Component } from 'react';

class ContactsTable extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th className="th">Name</th>
            <th className="th">Last name</th>
            <th className="th">Phone</th>
            <th className="th">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, lastName, phone }) => (
            <tr key={id} className="tr">
              <td className="td">{name}</td>
              <td className="td">{lastName}</td>
              <td className="td">{phone}</td>
              <td className="td">
                <button className="button delete-button" onClick={() => deleteContact(id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ContactsTable;
