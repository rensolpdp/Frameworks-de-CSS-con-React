import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styles from './App.module.css';
import ProductCard from './components/productcard/ProductCard';

const productos = [
  { id: 1, nombre: 'Cera para cabello', precio: 4500, imagen: 'https://via.placeholder.com/300x200?text=Cera', stock: 10 },
  { id: 2, nombre: 'Shampoo profesional', precio: 12000, imagen: 'https://via.placeholder.com/300x200?text=Shampoo', stock: 0 },
  { id: 3, nombre: 'Maquinita de corte', precio: 35000, imagen: 'https://via.placeholder.com/300x200?text=Maquinita', stock: 3 },
  { id: 4, nombre: 'Loción para barba', precio: 6000, imagen: 'https://via.placeholder.com/300x200?text=Locion', stock: 7 },
];

const turnosIniciales = [
  { id: 1, cliente: 'Nico Rios', servicio: 'Corte + Barba', precio: 11000, barbero: 'Pepe', notas: 'Cliente habitual' },
  { id: 2, cliente: 'Gabi Tolaba', servicio: 'Color', precio: 25000, barbero: 'Gallina', notas: 'Alergia a tintes fuertes' },
  { id: 3, cliente: 'Nico Rios', servicio: 'Lavado', precio: 0, barbero: 'Pepe', notas: 'Promoción por 5to corte' }, 
  { id: 4, cliente: 'Gabi Tolaba', servicio: 'Corte de cabello', precio: 8000, barbero: null, notas: 'Atiende el primer barbero disponible' },
  { id: 5, cliente: 'Renso Pistan', servicio: 'Diseño de Cejas', precio: 3000, barbero: 'Gallina', notas: 'Primera vez' },
  { id: 6, cliente: 'Amaya Braian', servicio: 'Corte con diseño', precio: 15000, barbero: 'Pepe', notas: 'Diseño en V' }
];

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
      <div className="d-flex flex-wrap p-3">
            {productos.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
      <Footer />
    </div>
  );
}