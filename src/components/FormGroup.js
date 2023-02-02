import React from "react";

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
    console.log(list);
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <label>Producto</label>
      <input
        type="text"
        placeholder="Ingresa el producto"
        required
        onChange={handleProducto}
      />
      <label>Cantidad</label>
      <input type="number" placeholder="0" required onChange={handleCatidad} />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormGroup;
