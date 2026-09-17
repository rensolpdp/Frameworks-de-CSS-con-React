import React from 'react'

export default function ProductCard({nombre, precio, img, stock}) {

  return (
    <div>
   
    <div className="card">
      <img src={img} className="card-img-top" alt={nombre}/>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">DESCRIPCION</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Precio: {precio}</li>
        <li className="list-group-item">Stock: {stock}</li>
      </ul>
      <div className="card-body">
      <button href="#" className={stock ?'btn btn-primary':'btn btn-secondary'} disabled={!stock}> Agregar</button>
      </div>
    </div>

    </div>
  )
}