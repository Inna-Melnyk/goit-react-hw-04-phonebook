import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Container } from './App.styled';

const CONTACT_LS_KEY = 'saved-contacts';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue
    }
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(CONTACT_LS_KEY, [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => {
      const contactNames = prevContacts.map(contact => contact.name.toLowerCase());
      if (contactNames.includes(newContact.name.toLowerCase())) {
        alert(`${newContact.name} is already in contacts!`);
        return [...prevContacts];
      } else {
        return [newContact, ...prevContacts];
      }
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const normalizedFilter = filter.toLowerCase();
 
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <ContactForm title={'phonebook'} onSubmit={addContact} />

      <ContactsList
        title={'contacts'}
        contacts={filteredContacts}
        onFilter={e => setFilter(e.currentTarget.value)}
        onDelete={deleteContact}
      />
    </Container>
  );
};
