// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import './App.css';
import Filter from './Filter/Filter.jsx';
import ContactForm from './contactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList';
import { useEffect } from 'react';
import { getContacts } from 'utils/contactsAPI';
import { useDispatch } from 'react-redux';

const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
