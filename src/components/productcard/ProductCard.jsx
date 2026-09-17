import { useState } from 'react';

export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0;
  const [imagenRota, setImagenRota] = useState(false);
  const precioFormateado = precio.toLocaleString('es-AR');

  return (
    <div
      className={`card shadow-sm border-0 rounded-4 overflow-hidden m-2 position-relative ${sinStock ? 'opacity-75' : ''}`}
      style={{ width: '16rem' }}
    >
      {sinStock && (
        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
          Sin stock
        </span>
      )}

      {!imagenRota ? (
        <img
          src={imagen}
          className="card-img-top"
          alt={nombre}
          style={{ height: '160px', objectFit: 'cover' }}
          onError={() => setImagenRota(true)}
        />
      ) : (
        <div
          className="bg-dark d-flex align-items-center justify-content-center"
          style={{ height: '160px' }}
        >
          <i className="bi bi-scissors text-warning" style={{ fontSize: '2.5rem' }}></i>
        </div>
      )}

      <div className="card-body text-center">
        <h5 className="card-title mb-1">{nombre}</h5>
        <p className="card-text text-muted fw-bold fs-5 mb-3">${precioFormateado}</p>
        <button
          className={`btn w-100 fw-semibold ${sinStock ? 'btn-secondary' : 'btn-warning'}`}
          disabled={sinStock}
        >
          {sinStock ? 'Sin stock' : 'Agregar'}
        </button>
      </div>
    </div>
  );
}
