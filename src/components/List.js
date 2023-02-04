import { React } from "react";
import { useState } from "react";
import { ListaItem } from "./ListaItem";
import Table from "react-bootstrap/Table";

export const List = ({ list, setlist }) => {
  const [editItem, setEditItem] = useState({});

  const listElemento = list.map((item, i) => (
    <ListaItem
      key={i}
      nombre={item.nombre}
      cantidad={item.cantidad}
      list={list}
      setlist={setlist}
      handleDelete={() => handleDelete(i)}
      editItem={editItem}
      setEditItem={setEditItem}
    />
  ));

  const handleDelete = (index) => {
    const newobj = [...list];
    newobj.splice(index, 1);
    setlist(newobj);
  };

  return (
    <>
      <Table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th className="thCantidad">Cantidad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{listElemento}</tbody>
      </Table>
    </>
  );
};
