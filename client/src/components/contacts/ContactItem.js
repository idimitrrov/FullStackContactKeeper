import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

export const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrentContact, clearCurrentContact } =
    contactContext;

  const { id, name, phone, email, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrentContact();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"> </i>
            {" " + email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"> </i>
            {" " + phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrentContact(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};