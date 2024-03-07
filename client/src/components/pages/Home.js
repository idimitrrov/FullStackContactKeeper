import React from "react";
import { useContext, useEffect } from "react";
import { Contacts } from "../contacts/Contacts";
import { ContactForm } from "../contacts/ContactForm";
import { ContactFilter } from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

export const Home = () => {
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   if (authContext.token) {
  //     authContext.loadUser();
  //   }
  // });

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

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
