import React from 'react';
import PanelControles from '../panelControles/PanelControles';
import ListaTurnos from '../listaTurnos/ListaTurnos';
import styles from './Main.module.css';


export default function Main({ turnos, estadoPantalla, filtroActual, ordenActual, cambiarFiltro, ordenar, simularEstado }) {
    return (
        <main className={styles.mainContent}>
            <div className={styles.headerTitle}>
                <h1>Gestión de Turnos</h1>
            </div>
            
            <PanelControles 
                filtroActual={filtroActual}
                cambiarFiltro={cambiarFiltro}
                ordenActual={ordenActual}
                ordenar={ordenar}
                simularEstado={simularEstado}
            />

            <ListaTurnos 
                estadoPantalla={estadoPantalla}
                turnos={turnos}
                textoFiltro={filtroActual}
            />
        </main>
    );
}