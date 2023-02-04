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
      <label className="labelFormulario">Codigo</label>
      <input
        className="inputFormulario"
        type="number"
        placeholder="Codigo del producto"
        required
        onChange={handleCodigo}
        value={producto.codigo}
      />
      <label className="labelFormulario">Producto</label>
      <input
        className="inputFormulario"
        type="text"
        placeholder="Ingresa el producto"
        required
        onChange={handleProducto}
        value={producto.nombre}
      />
      <label className="labelFormulario">Cantidad</label>
      <input
        className="inputFormulario"
        type="number"
        required
        placeholder="Ingresa la cantidad"
        onChange={handleCatidad}
        value={producto.cantidad}
      />
      <label className="labelFormulario">Medida</label>
      <input
        className="inputFormulario"
        type="text"
        required
        placeholder="Unidad de Medida"
        onChange={handleMedida}
        value={producto.medida}
      />
      <Button
        className="btnAgregar"
        type="submit"
        variant="secondary"
        size="lg"
      >
        Agregar
      </Button>
    </form>
  );
}

export default FormGroup;
