import React from 'react'

export default function ProductCard({nombre, precio, img, stock}) {

  return (
    <div className={`flex-wrap h-128 w-64 rounded-xl  border p-4  bg-white transition-all ${!stock ? 'bg-red-50 border-red-500 border-4' : 'border-gray-200'}`}>

      <div>
      <div className='h-68 w-auto'>
        <img src={img} className="aspect-auto rounded-lg" alt={nombre}/>
      </div>
    
      <h5 className="text-xl font-bold text-gray-800">{nombre}</h5>
      <p className="card-text">DESCRIPCION</p>
      <div className='p-5'>      
        <li className="text-sm text-gray-500 mt-2">Precio: {precio}</li>
        <li className="text-sm text-gray-500">Stock: {stock}</li>
      </div>

      <button 
      className={`w-full py-2 px-4 rounded-lg font-semibold ${stock ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      disabled={stock === 0}
      >
      {stock > 0 ? 'Agregar' : 'Agotado'}
      </button>
      </div>
    </div>

  )
}