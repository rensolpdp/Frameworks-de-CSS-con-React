import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styles from './App.module.css';
import ProductCard from './components/productcard/ProductCard';

const productos = [
  {
    id: 1,
    nombre: 'Cera Modeladora Fuerte',
    precio: '12400',
    imagen: 'https://imgs.search.brave.com/q4I5lM2O4fiHBom-OzHfRsaXhYLwMIGILnMuI5LdPAc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9vbGV1/bnNiZWF1dHkuY29t/L2Nkbi9zaG9wL2Zp/bGVzL0NlcmFtb2Rl/bGFkb3JhZXh0cmFm/dWVydGViYXJiZXJz/aG9wMTMwZy5wbmc_/dj0xNzIzNTg1MzYy/JndpZHRoPTE0NDU',
    stock: 15
  },
  {
    id: 2,
    nombre: 'Tijeras de Corte Profesional',
    precio: '48000',
    imagen: 'https://imgs.search.brave.com/ahOF9z9Xoyg3FgF02au5o-g5PFyj7WL5eWvrV7Sdalc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FkbmljLmNvbS5h/ci9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9zdGF0aWMuYmlk/Y29tLmNvbS5hci9w/dWJsaWNhY2lvbmVz/TUwvcHJvZHVjdG9z/L1RJSkVSQVMyLzEw/MDB4MTAwMC1USUpF/UkFTMi5qcGcmdz0z/ODQwJnE9NzU',
    stock: 5
  },
  {
    id: 3,
    nombre: 'Navaja de Afeitar Tradicional',
    precio: '18999',
    imagen: 'https://imgs.search.brave.com/04SGJKEQJqFVvWxY80ckEiHGSjAl445q2e-RoCoXvdc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYzMjEyNS1NTEE0/MjkzNTQ5ODUzOF8w/NzIwMjAtRS53ZWJw',
    stock: 0 // Dejamos este en 0 para probar tu tarjeta condicional "Agotado"
  },
  {
    id: 4,
    nombre: 'Shampoo para Barba & Rostro',
    precio: '10500',
    imagen: 'https://imgs.search.brave.com/La-JgauFCyBkdtRcF0I_5t8YI_TxVxIYPfbXeJAP5gA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vTC1N/QVItVEFDLWZvci1N/ZW4tQmVhcmQtYW5k/LUZhY2UtU2hhbXBv/by01LWZsLW96LVRB/Qy1TaGFtcG9vLXBh/cmEtQmFyYmEteS1S/b3N0cm9fMzQ5ZjEy/YmYtMjRhOC00ZjY4/LTk1MTEtNjc0YWNm/NjM1ZjhjLjk5ZDUx/ZjhjMjUyZDg2NDE0/NTZjMDNlZjViYTdh/NmI0LmpwZWc_b2Ru/SGVpZ2h0PTY0MCZv/ZG5XaWR0aD02NDAm/b2RuQmc9RkZGRkZG',
    stock: 8
  },
  {
    id: 5,
    nombre: 'Capa de Barbero Negra Premium',
    precio: '16999',
    imagen: 'https://imgs.search.brave.com/sGEm700Ya37UmW_t9HMRmmn73LcEz4P7D_QxxPyFTT4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFWZ3B1K3kyK0wu/anBn',
    stock: 12
  },
  {
    id: 6,
    nombre: 'Peine de Fibra de Carbono',
    precio: '3500',
    imagen: 'https://imgs.search.brave.com/bLuFXl_8DUotMcDxUN13k5CzdKSM2LLGhgdoQWNbARE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucmFwcGkuY29t/Lm14L3Byb2R1Y3Rz/L2E1NGZhZDc0LWYw/MTUtNGM1Zi05YTQ1/LWJmMGQ5MWQzNjY5/OC5wbmc_ZD05MDB4/NzUwJmU9d2VicCZx/PTMw',
    stock: 0
  },
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
      
      <div >
            {productos.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
      <Footer />
    </div>
  );
}