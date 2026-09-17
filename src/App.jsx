import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styles from './App.module.css';
import ProductCard from './components/productcard/ProductCard'

import corteClasico from './assets/corte-clasico.jpg'
import corteBarba from './assets/corte-barba.jpg'
import color from './assets/color.jpg'
import corteCejas from './assets/corte-cejas.jpg'
import barba from './assets/barba.jpg'
import lavadoPeinado from './assets/lavado-peinado.jpg'

const turnosIniciales = [
  { id: 1, cliente: 'Nico Rios', servicio: 'Corte + Barba', precio: 11000, barbero: 'Pepe', notas: 'Cliente habitual' },
  { id: 2, cliente: 'Gabi Tolaba', servicio: 'Color', precio: 25000, barbero: 'Gallina', notas: 'Alergia a tintes fuertes' },
  { id: 3, cliente: 'Nico Rios', servicio: 'Lavado', precio: 0, barbero: 'Pepe', notas: 'Promoción por 5to corte' }, 
  { id: 4, cliente: 'Gabi Tolaba', servicio: 'Corte de cabello', precio: 8000, barbero: null, notas: 'Atiende el primer barbero disponible' },
  { id: 5, cliente: 'Renso Pistan', servicio: 'Diseño de Cejas', precio: 3000, barbero: 'Gallina', notas: 'Primera vez' },
  { id: 6, cliente: 'Amaya Braian', servicio: 'Corte con diseño', precio: 15000, barbero: 'Pepe', notas: 'Diseño en V' }
];

const PRODUCTOS = [
  { id: 1, nombre: 'Corte clásico', precio: 11000, imagen: corteClasico, stock: 5 },
  { id: 2, nombre: 'Corte + Barba', precio: 15000, imagen: corteBarba, stock: 0 },
  { id: 3, nombre: 'Color', precio: 20000, imagen: color, stock: 3 },
  { id: 4, nombre: 'Corte + Cejas', precio: 13000, imagen: corteCejas, stock: 0 },
  { id: 5, nombre: 'Barba', precio: 8000, imagen: barba, stock: 7 },
  { id: 6, nombre: 'Lavado + Peinado', precio: 6000, imagen: lavadoPeinado, stock: 10 }
]

export default function App() {

  const [estadoPantalla, setEstadoPantalla] = useState('datos'); 
  const [filtroServicio, setFiltroServicio] = useState('');
  const [orden, setOrden] = useState('asc'); 
  const turnosFiltradosYOrdenados = [...turnosIniciales]
    .filter(turno => turno.servicio.toLowerCase().includes(filtroServicio.toLowerCase()))
    .sort((a, b) => orden === 'asc' ? a.precio - b.precio : b.precio - a.precio);

  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Main 
        turnos={turnosFiltradosYOrdenados}
        estadoPantalla={estadoPantalla}
        filtroActual={filtroServicio}
        ordenActual={orden}
        cambiarFiltro={(e) => setFiltroServicio(e.target.value)}
        ordenar={() => setOrden(orden === 'asc' ? 'desc' : 'asc')}
        simularEstado={(nuevoEstado) => setEstadoPantalla(nuevoEstado)}
      />

      <section className="section">
        <h2 className="title is-4">Productos</h2>
        <div className="columns is-multiline">
          {PRODUCTOS.map(producto => (
            <div className="column is-one-quarter" key={producto.id}>
              <ProductCard
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
                stock={producto.stock}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}