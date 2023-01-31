import React from "react";
import Table from "react-bootstrap/Table";

export const List = ({ list }) => {
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
        <tbody></tbody>
      </Table>
    </>
  );
};
