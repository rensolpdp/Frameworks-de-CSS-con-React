import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styles from './App.module.css';
import ProductCard from './components/productcard/ProductCard';

const productos = [
  { id: 1, nombre: 'Cera para cabello', precio: 4500, imagen: 'https://imgs.search.brave.com/mkpXN3n8KVCYFtPsKVgjJgKm8iJEkvaKWlIjJosmBC8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk3NzU0NS1NTFU3/ODUzNjIwMTAwM18w/ODIwMjQtRS53ZWJw', stock: 10 },
  { id: 2, nombre: 'Shampoo profesional', precio: 12000, imagen: 'https://imgs.search.brave.com/p-yHj2C-xJdON-VWIsUVVssUVdUwcIoM7SZ6fgoihDs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYxODg5MC1NTEE1/MTM2MTg1NzY3NV8w/ODIwMjItRS53ZWJw', stock: 0 },
  { id: 3, nombre: 'Maquinita de corte', precio: 35000, imagen: 'https://imgs.search.brave.com/PzTfYYxhxpSfFsipMTniMU3vs9HyoiPHTgv_Kazr4yk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aGlwZXJkZWxhcGVs/dS5jb20uYXIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDcv/bSVDMyVBMXF1aW5h/LWNvcnRlLW1hZ2lj/LWNsaXAtY2FibGUt/d2FobC1wZWxvLWhl/cnJhbWllbnRhcy1j/b3J0ZS1jYWJlemEt/ZWwtaGlwZXItZGUt/bGEtcGVsdS0zMDB4/MzAwLnBuZw', stock: 3 },
  { id: 4, nombre: 'Loción para barba', precio: 6000, imagen: 'https://imgs.search.brave.com/TDRDS27bz3PNOglXrjp6GtvR3oT239q-bvjVLGBTTZY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iYXJi/aWVyZHV3ZWIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9lbGVt/ZW50b3IvdGh1bWJz/L2xvdGlvbi1hY2Nl/bGVyYXRldXItcG91/c3NlLWJhcmJlLXBv/aWxzLWltcGVyaWFs/LWJlYXJkLXBzMDZ5/M3Q3Y2RzczllcGtj/cTk2YXFjZ3dtdHU2/Y3ZmaTRiaG9hYWtn/MC5qcGc', stock: 7 },
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
      <div className="d-flex flex-wrap p-3">
            {productos.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
      <Footer />
    </div>
  );
}