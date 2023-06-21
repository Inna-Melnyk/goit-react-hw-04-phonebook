import PropTypes from 'prop-types';
import { Filter, FilterInput } from './ContactsFilter.styled';

export const ContactsFilter = ({onFilter }) => {
  return (
    <Filter>
      Find contacts by name
      <FilterInput type="text"  onChange={onFilter} />
    </Filter>
  );
};

ContactsFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
