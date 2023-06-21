import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { Title, List } from './ContactsList.styled';

export const ContactsList = ({
  title,
  contacts,
  onFilter,
  onDelete,
}) => {

  return (
    <div>
      <Title>{title}</Title>

      <ContactsFilter  onFilter={onFilter} />

      <List>
        {contacts.map(item => {
          return <Contact values={item} key={item.id} onDelete={onDelete} />;
        })}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  onFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
