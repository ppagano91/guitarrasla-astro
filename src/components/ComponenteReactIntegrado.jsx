import React, { useState } from "react";

const ComponenteReactIntegrado = () => {
  const [cliente, setCliente] = useState("Cliente");

  console.log(cliente);
  return <div>ComponenteReactIntegrado</div>;
};

export default ComponenteReactIntegrado;
