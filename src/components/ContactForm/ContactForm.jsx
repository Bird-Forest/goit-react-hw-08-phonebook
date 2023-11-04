import {
  Form,
  ContactName,
  ContactNumber,
  BtnAdd,
  MarkField,
  WrapNumber,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { RiUserAddFill } from 'react-icons/ri';
import { selectContacts } from 'redux/contacts/selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    // console.log(newUser);
    const hasContact = contacts.some(
      contact => contact.name === event.target.elements.name.value
    );
    if (hasContact) {
      alert(`${newUser.name} is already in contacts`);
      event.target.reset();
      return;
    }
    dispatch(addContact(newUser));
    event.target.reset();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <MarkField>
          <ContactName type="text" name="name" placeholder="Name..." required />
        </MarkField>
        <WrapNumber>
          <MarkField>
            <ContactNumber
              type="tel"
              name="number"
              placeholder="Number..."
              required
            />
          </MarkField>
          <BtnAdd type="submit">
            <RiUserAddFill className="icon-add" />
          </BtnAdd>
        </WrapNumber>
      </Form>
    </>
  );
}
