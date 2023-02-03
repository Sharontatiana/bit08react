import "./App.css";
import { useState } from "react";
import FormGroup from "./components/FormGroup";
import { List } from "./components/List";
import { ListaItem } from "./components/ListaItem";

function App() {
  const [producto, setproducto] = useState({ nombre: "", cantidad: 0 });
  const [list, setlist] = useState([]);

  return (
    <>
      <FormGroup
        producto={producto}
        setproducto={setproducto}
        list={list}
        setlist={setlist}
      />
      <List list={list} setlist={setlist} />
      <ListaItem
        list={list}
        setlist={setlist}
      />
    </>
  );
}

export default App;
