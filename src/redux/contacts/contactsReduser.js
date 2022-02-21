import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from '../../redux/contacts/contactsActions.js';
import {
  getContacts,
  postContact,
  removeContact,
} from '../../redux/contacts/contactsOperations';
// import { getContactsList } from '../../utils/contactsAPI';

// const contactsFotChecking = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'rosie simpson', number: '459-12-56' },
//   { id: 'id-6', name: 'hermione kline', number: '443-89-12' },
//   { id: 'id-7', name: 'eden clements', number: '645-17-79' },
//   { id: 'id-8', name: 'annie copeland', number: '227-91-26' },
// ];

const contacts = createReducer([], {
  [postContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

const isLoadingReduser = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [postContact.pending]: () => true,
  [postContact.fulfilled]: () => false,
  [postContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const errorReduser = createReducer(null, {
  [getContacts.pending]: (_, { payload }) => payload,
  [getContacts.rejected]: () => null,
  [postContact.pending]: (_, { payload }) => payload,
  [postContact.rejected]: () => null,
  [removeContact.pending]: (_, { payload }) => payload,
  [removeContact.rejected]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts,
  filter,
  isLoading: isLoadingReduser,
  error: errorReduser,
});
export default phonebookReducer;
