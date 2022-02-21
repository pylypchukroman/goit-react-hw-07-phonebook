// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import style from './ContactList.module.css';
// import { deleteContact } from '../redux/contacts/contactsActions';
import {
  getContacts,
  removeContact,
} from '../redux/contacts/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  // console.log(items);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={style.Item}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(removeContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// const getCurrentContacts = (allContacts, filter) => {
//   const normalizeFilterRequest = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilterRequest)
//   );
// };

// const mapStateToProps = ({ contacts, filter }) => ({
//   contacts: getCurrentContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
