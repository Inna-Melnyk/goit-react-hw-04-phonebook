import PropTypes from 'prop-types';
import { Item, Text, DeleteBtn } from './Contact.styled';
export const Contact = ({ values: { name, number, id }, onDelete }) => {
  return (
    <Item key={id}>
      <Text>
        {name} : {number}
      </Text>
      <DeleteBtn onClick={() => onDelete(id)}>Delete</DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
   values: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
   }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
