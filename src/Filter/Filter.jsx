import style from './Filter.module.css';
import { changeFilter } from '../redux/contacts/contactsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelectors';

const Filter = () => {
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
    </>
  );
};

export default Filter;
