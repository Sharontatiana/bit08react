import "./App.css";
import { useState } from "react";
import FormGroup from "./components/FormGroup";
import { List } from "./components/List";

function App() {
  const [producto, setproducto] = useState({
    codigo:"",
    nombre: "",
    cantidad: "",
    medida:""
  });
  const [list, setlist] = useState([]);

  return (
    <>
    <h1> Te damos la Bienvenida a tu Catalogo de Productos </h1>
      <FormGroup
        producto={producto}
        setproducto={setproducto}
        list={list}
        setlist={setlist}
      />
      <List list={list} setlist={setlist} />
    </>
  );
}

export default App;
