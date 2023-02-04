import React from "react";
import Button from "react-bootstrap/Button";

function FormGroup({ producto, setproducto, list, setlist }) {
  const handleCodigo = (event) => {
    const newobj = {
      codigo: event.target.value,
      nombre: producto.nombre,
      cantidad: producto.cantidad,
      medida: producto.medida,
    };
    setproducto(newobj);
  };
  const handleProducto = (event) => {
    const newobj = {
      codigo: producto.codigo,
      nombre: event.target.value,
      cantidad: producto.cantidad,
      medida: producto.medida,
    };
    setproducto(newobj);
  };

  const handleCatidad = (event) => {
    const newobj = {
      codigo: producto.codigo,
      nombre: producto.nombre,
      cantidad: event.target.value,
      medida: producto.medida,
    };
    setproducto(newobj);
  };

  const handleMedida = (event) => {
    const newobj = {
      codigo: producto.codigo,
      nombre: producto.nombre,
      cantidad: producto.cantidad,
      medida: event.target.value,
    };
    setproducto(newobj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setlist([...list, producto]);
    setproducto({ codigo: "", nombre: "", cantidad: "", medida: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="labelProducto">Codigo</label>
      <input
        className="inputCodigo"
        type="number"
        placeholder="Ingresa el codigo del producto"
        required
        onChange={handleCodigo}
        value={producto.codigo}
      />
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
      <label className="labelCantidad">Unidad Medida</label>
      <input
        className="inputMedida"
        type="text"
        required
        placeholder="Ingresa la unidad de Medida"
        onChange={handleMedida}
        value={producto.medida}
      />
      <Button className="btnAgregar" type="submit" variant="dark">
        Agregar
      </Button>
    </form>
  );
}

export default FormGroup;
