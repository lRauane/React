import React, { useEffect, useState } from "react";

const FuncionalComponente = () => {
  const estado = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [GeneraIdade, setGeneraIdade] = useState(estado);

  useEffect(() => {
    const interval = setInterval(() =>{
      tick();
    }, 1000)
    return () => {
      clearInterval(interval)
    };
  });

  const tick = () => {
    return setGeneraIdade({
      fecha: new Date() ,
      edad: GeneraIdade.edad + 1,
      nombre: GeneraIdade.nombre,
      apellidos: GeneraIdade.apellidos
    })
  };

  return (
    <div>
      <div>
        <h2>
          Hora Actual:
          {GeneraIdade.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {GeneraIdade.nombre} {GeneraIdade.apellidos}
        </h3>
        <h1>Edad: {GeneraIdade.edad} </h1>
      </div>
    </div>
  );
};

export default FuncionalComponente;
