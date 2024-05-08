import { useState } from "react";

export default function Contato() {
  const [state, setState] = useState("");
  function fuiClicado() {
    setState("deudzdev@gmail.com");
  }
  return (
    <div className="main-content">
      <h1>Contato</h1>
      <p>Caso queria me contatar use este email:</p>
      <button className="border rounded-md p-1" onClick={fuiClicado}>
        Clique aqui para mostrar!
      </button>
      <div className="font-mono">{state}</div>
    </div>
  );
}
