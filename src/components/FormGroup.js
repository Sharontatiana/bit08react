import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormGroup({ producto, setproducto, list, setlist }) {
  const handleChange = (e) => {
    setproducto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(producto);
    list([...list, producto]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="producto">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el producto"
          value={producto}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cantidad">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control type="text" placeholder="Ingresa la cantidad " />
      </Form.Group>
      <Button variant="info">Agregar</Button>
    </Form>
  );
}

export default FormGroup;
