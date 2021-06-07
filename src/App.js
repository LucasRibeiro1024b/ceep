import React from 'react';
import ListaDeNotas from "./components/ListaDeNotas";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Titulo"></input>
        <textarea palceholder="Escresa sua nota..."/>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
