import React from "react";
import Button from "react-bootstrap/Button";

function FormGroup({ producto, setproducto, list, setlist }) {
  const handleProducto = (event) => {
    const newobj = {
      nombre: event.target.value,
      cantidad: producto.cantidad,
    };
    setproducto(newobj);
  };

  const handleCatidad = (event) => {
    const newobj = {
      nombre: producto.nombre,
      cantidad: event.target.value,
    };
    setproducto(newobj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setlist([...list, producto]);
    setproducto({ nombre: "", cantidad: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="labelProducto">Producto</label>
      <input
        className="inputProducto"
        type="text"
        placeholder="Ingresa el producto"
        required
        onChange={handleProducto}
        value={producto.nombre}
      />
      <label className="labelCantidad">Cantidad</label>
      <input
        className="inputCantidad"
        type="number"
        required
        placeholder="Ingresa la cantidad"
        onChange={handleCatidad}
        value={producto.cantidad}
      />
      <Button className="btnAgregar" type="submit" variant="dark">
        Agregar
      </Button>
    </form>
  );
}

export default FormGroup;
