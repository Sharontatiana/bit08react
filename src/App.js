import "./App.css";
import { useState } from "react";
import FormGroup from "./components/FormGroup";
import { List } from "./components/List";

function App() {
  const [producto, setproducto] = useState("");
  const [list, setlist] = useState([]);

  return (
    <>
      <FormGroup
        producto={producto}
        setproducto={setproducto}
        list={list}
        setlist={setlist}
      />
      <List list={list} />
    </>
  );
}

export default App;
