// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { TitleContactsPage, WrapContactsPage } from './Page.styled';

export default function Contacts() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <WrapContactsPage>
      <TitleContactsPage>Contacts Page</TitleContactsPage>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </WrapContactsPage>
  );
}
