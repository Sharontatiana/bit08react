import React from "react";
import Button from "react-bootstrap/Button";

function FormGroup({ producto, setproducto, list, setlist }) {
  const handleProducto = (event) => {
    const newobj = { nombre: event.target.value, cantidad: producto.cantidad };
    setproducto(newobj);
  };

  const handleCatidad = (event) => {
    const newobj = { nombre: producto.nombre, cantidad: event.target.value };
    setproducto(newobj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setlist([...list, producto]);
    setproducto({ nombre: "", cantidad: NaN });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Producto</label>
      <input
        type="text"
        placeholder="Ingresa el producto"
        required
        onChange={handleProducto}
        value={producto.nombre}
      />
      <label>Cantidad</label>
      <input
        type="number"
        required
        placeholder="Ingresa la cantidad"
        onChange={handleCatidad}
        value={producto.cantidad}
      />
      <Button type="submit" variant="dark">
        Agregar
      </Button>
    </form>
  );
}

export default FormGroup;
