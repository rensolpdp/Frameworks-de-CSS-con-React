import { useState } from 'react';

export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0;
  const [imagenRota, setImagenRota] = useState(false);
  const precioFormateado = precio.toLocaleString('es-AR');

  return (
    <div 
      className={`flex flex-col justify-between bg-white shadow-md rounded-2xl overflow-hidden m-2 relative w-64  ${sinStock ? 'opacity-75' : ''}`}
    >
      {sinStock && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded absolute top-2 left-2 z-10">
          Sin stock
        </span>
      )}

      {!imagenRota ? (
        <img
          src={imagen}
          className="w-full object-contain p-2" 
          alt={nombre}
          onError={() => setImagenRota(true)}
        />
      ) : (
        <div className="bg-gray-800  flex items-center justify-center">
          <i className="bi bi-scissors text-yellow-500 text-4xl"></i>
        </div>
      )}

      <div className="p-4 text-center flex flex-col justify-between flex-1">
        <div>
          <h5 className="text-sm font-semibold mb-1 text-gray-800 line-clamp-2">{nombre}</h5>
          <p className="text-gray-500 font-bold text-lg mb-3">\${precioFormateado}</p>
        </div>
        
          <button 
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
              sinStock 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
            }`}
            disabled={sinStock}
          >
            {sinStock ? 'Sin stock' : 'Agregar'}
          </button>
      </div>
    </div>
  );
}

