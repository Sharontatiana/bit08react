import { React } from "react";
import { useState } from "react";
import { ListaItem } from "./ListaItem";
import Table from "react-bootstrap/Table";

export const List = ({ list, setlist }) => {
  const [editItem, setEditItem] = useState({});

  const listElemento = list.map((item, i) => (
    <ListaItem
      key={i}
      codigo={item.codigo}
      nombre={item.nombre}
      cantidad={item.cantidad}
      medida={item.medida}
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
            <th className="tdCodigo">#</th>
            <th className="thCantidad">Producto</th>
            <th>Cantidad</th>
            <th className="thCantidad">UI Medida</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{listElemento}</tbody>
      </Table>
    </>
  );
};
