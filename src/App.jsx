import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styles from './App.module.css';


import 'bootstrap/dist/css/bootstrap.min.css';


import ProductCard from './components/productcard/ProductCard';

const turnosIniciales = [
  { id: 1, cliente: 'Nico Rios', servicio: 'Corte + Barba', precio: 11000, barbero: 'Pepe', notas: 'Cliente habitual' },
  { id: 2, cliente: 'Gabi Tolaba', servicio: 'Color', precio: 25000, barbero: 'Gallina', notas: 'Alergia a tintes fuertes' },
  { id: 3, cliente: 'Nico Rios', servicio: 'Lavado', precio: 0, barbero: 'Pepe', notas: 'Promoción por 5to corte' }, 
  { id: 4, cliente: 'Gabi Tolaba', servicio: 'Corte de cabello', precio: 8000, barbero: null, notas: 'Atiende el primer barbero disponible' },
  { id: 5, cliente: 'Renso Pistan', servicio: 'Diseño de Cejas', precio: 3000, barbero: 'Gallina', notas: 'Primera vez' },
  { id: 6, cliente: 'Amaya Braian', servicio: 'Corte con diseño', precio: 15000, barbero: 'Pepe', notas: 'Diseño en V' }
];

const ProductosPrueba=[
  {id:1, nombre: 'Pepito', precio: '10000',img:'https://imgs.search.brave.com/SRTNEBWebEZxViUbtmdw_SdirfecwOzfSia2R3ygzCY/rs:fit:860:0:0:0/g:ce/aHR0cDovL3NhbHRh/MjEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDA5LzA1L2pw/Z19yb2RvbGZvX2Fy/ZWRlc181LmpwZw', stock:10},
  {id:2, nombre: 'Pepona', precio: '5500', img:'https://imgs.search.brave.com/S7h7Ans0DrGtdktEH3UFjrL_Ide8pLvNGntSgcmtB30/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgxMzUxOC1NTEE4/NDM1MTA0MDY3NV8w/NTIwMjUtRS53ZWJw', stock:0}
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

      <div>
        {ProductosPrueba.map((PRODUCTO)=>(
          <ProductCard
            key={PRODUCTO.id}
            nombre={PRODUCTO.nombre}
            precio={PRODUCTO.precio}
            img={PRODUCTO.img}
            stock={PRODUCTO.stock}
            />
        ))}
      </div>

      <Footer />
    </div>
  );
}