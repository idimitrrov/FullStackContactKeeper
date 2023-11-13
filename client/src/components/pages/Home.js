import React from "react";
import { Contacts } from "../contacts/Contacts";
import { ContactForm } from "../contacts/ContactForm";
import { ContactFilter } from "../contacts/ContactFilter";

export const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm></ContactForm>
      </div>
      <div>
        <ContactFilter></ContactFilter>
        <Contacts />
      </div>
    </div>
  );
};