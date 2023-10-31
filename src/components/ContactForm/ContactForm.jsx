import {
  Form,
  ContactName,
  ContactNumber,
  BtnAdd,
  MarkField,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { RiUserAddFill } from 'react-icons/ri';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.users);

  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    console.log(newUser);
    const hasContact = contacts.some(
      contact => contact.name === event.target.elements.name.value
    );
    if (hasContact) {
      alert(`${hasContact} is already in contacts`);
      event.target.reset();
      return;
    }
    dispatch(addContact(newUser));
    event.target.reset();
    // console.log(newUser);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <MarkField>
          Name
          <ContactName type="text" name="name" required />
        </MarkField>
        <MarkField>
          Number
          <ContactNumber type="tel" name="number" required />
        </MarkField>
        <BtnAdd type="submit">
          <RiUserAddFill className="icon-add" />
        </BtnAdd>
      </Form>
    </>
  );
}
