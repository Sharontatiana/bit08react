import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export const ListaItem = ({
  nombre,
  cantidad,
  list,
  setlist,
  handleDelete,
  editItem,
  setEditItem,
}) => {
  const [newNombre, setnewNombre] = useState(nombre);
  const [newCantidad, setnewCantidad] = useState(cantidad);

  const handleEliminar = (event) => {
    handleDelete();
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleGuardar = () => {
    const updatedList = list.map((item) => {
      if (item.nombre === nombre) {
        return { nombre: newNombre, cantidad: newCantidad };
      }
      return item;
    });
    setlist(updatedList);
    setEditItem({});
  };

  const handleCancel = () => {
    setnewNombre(nombre);
    setnewCantidad(cantidad);
    setEditItem({});
  };

  if (editItem.nombre === nombre) {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={newNombre}
            id="nombre-input"
            onChange={(e) => setnewNombre(e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            value={newCantidad}
            id="cantidad-input"
            onChange={(e) => setnewCantidad(e.target.value)}
          />
        </td>
        <td>
          <Button variant="warning" onClick={handleGuardar}>
            <i className="bi bi-check2-square"></i>
          </Button>{" "}
          <Button variant="danger" onClick={handleCancel}>
            <i className="bi bi-x-square"></i>
          </Button>{" "}
        </td>
      </tr>
    );
  }

  return (
    <>
      <tr>
        <td>{nombre}</td>
        <td>{cantidad}</td>
        <td>
          <Button variant="outline-danger" onClick={handleEliminar}>
            <i className="bi bi-trash3-fill"></i>
          </Button>{" "}
          <Button
            variant="outline-primary"
            onClick={() => handleEdit({ nombre, cantidad })}
          >
            <i className="bi bi-pencil-fill"></i>
          </Button>{" "}
        </td>
      </tr>
    </>
  );
};
