import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { TitleContactsPage, WrapContactsPage } from './Page.styled';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <WrapContactsPage>
      <TitleContactsPage>
        {isLoading && 'Request in progress...'}
      </TitleContactsPage>
      <ContactForm />
      <ContactList />
    </WrapContactsPage>
  );
}
