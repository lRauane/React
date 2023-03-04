import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import ContactComponentB from './componentB';

const ContactComponentA = ({contact}) => {
  return (
    <div>
     <h1>Contato:</h1>
     <h2>nome: {contact.name}</h2>
     <h2>sobrenome: {contact.sobrenome}</h2>
     <h2>email: {contact.email}</h2>
     <ContactComponentB state={true}></ContactComponentB>
    </div>
  );
};


ContactComponentA.propTypes = {
  contact : PropTypes.instanceOf(Contact)
};


export default ContactComponentA;
