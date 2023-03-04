import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactComponentB = (state) => {
  const [conectado, setConectado] = useState(state);
  return (
    <div>
      <h3>
        {conectado === false ? "Contacto no disponible" : "Contacto En linea"}
      </h3>
      <button onClick={() => setConectado(!conectado)}>
        {conectado === false ? "Conectado" : "Desconectado"}
      </button>
    </div>
  );
};

ContactComponentB.propTypes = {
  state: PropTypes.bool,
};

export default ContactComponentB;
