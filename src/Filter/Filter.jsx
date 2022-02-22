import style from './Filter.module.css';
import { changeFilter } from '../redux/contacts/contactsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelectors';

const Filter = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <>
      <h2 className={style.Title}>Find contacts by name</h2>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e))}
      />
      {isLoading && <h1>loading</h1>}
    </>
  );
};

export default Filter;
