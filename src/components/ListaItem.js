import React from "react";
import Button from "react-bootstrap/Button";

export const ListaItem = ({ nombre, cantidad }) => {
  return (
    <>
      <tr>
        <td>{nombre}</td>
        <td>{cantidad}</td>
        <td>
          <Button variant="outline-primary">
            <i className="bi bi-pencil-fill"></i>
          </Button>{' '}
          <Button variant="outline-danger">
            <i className="bi bi-trash3-fill"></i>
          </Button>{' '}
          <Button variant="outline-success">
            <i className="bi bi-bookmark-check-fill"></i>
          </Button> {' '}
        </td>
      </tr>
    </>
  );
};
