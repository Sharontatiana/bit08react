import React from "react";
import Table from "react-bootstrap/Table";
import { ListaItem } from "./ListaItem";

export const List = ({ list, setlist }) => {
  const listElemento = list.map((item, i) => (
    <ListaItem
      key={i}
      nombre={item.nombre}
      cantidad={item.cantidad}
      list={list}
      setlist={setlist}
    />
  ));
  return (
    <>
      <Table striped="columns">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{listElemento}</tbody>
      </Table>
    </>
  );
};
