import React from 'react'

export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0

  return (
    <div className={`box ${sinStock ? 'has-background-warning-light' : ''}`}>
      <figure className="image is-4by3">
        <img src={imagen} alt={nombre} />
      </figure>
      <h2 className="title is-5 mt-4">{nombre}</h2>
      <p className="subtitle is-6">${precio}</p>
      <p className="mb-4">
        <span className={`tag ${sinStock ? 'is-danger' : 'is-success'}`}>
          {sinStock ? 'Sin stock' : `Stock: ${stock}`}
        </span>
      </p>
      <button className="button is-primary is-fullwidth" disabled={sinStock}>
        Agregar
      </button>
    </div>
  )
}