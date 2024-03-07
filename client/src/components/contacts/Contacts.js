import React, { Fragment, useContext, useEffect } from "react";
import { ContactItem } from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";
export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {!!filtered
        ? filtered?.map((contact) => {
            return (
              <ContactItem key={contact._id} contact={contact}></ContactItem>
            );
          })
        : contacts?.map((contact) => (
            <ContactItem key={contact._id} contact={contact}></ContactItem>
          ))}
    </Fragment>
  );
};
