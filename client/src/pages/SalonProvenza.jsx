import React, { useEffect, useState } from 'react';
import '../../css/salonProvenza.css';
import '../../css/variables.css';

const SalonesProvenza = () => {
  const [mesasSalon1, setMesasSalon1] = useState([]);

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await fetch('/seats/restaurantes');
        const data = await response.json();
        const restaurante = data.find(r => r.barrio === "Provenza");
        const salon1 = restaurante.salones.find(s => s.nombre_sala === "Salón 1");

        const ordenVisual = [
          "Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4", "Mesa 5",
          "Mesa 6", "Mesa 7", "Mesa 8", "Mesa 9", "Mesa 10"
        ];

        const mesasOrdenadas = ordenVisual.map(nombre =>
          salon1.mesas.find(mesa => mesa.nombre_mesa === nombre)
        );

        setMesasSalon1(mesasOrdenadas);
      } catch (error) {
        console.error("Error cargando mesas:", error);
      }
    };

    fetchMesas();
  }, []);

  const toggleReserva = async (mesa) => {
    const url = mesa.estado === 'disponible'
      ? '/seats/reservar'
      : '/seats/liberar';

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mesasIds: [mesa.mesa_id] })
      });

      setMesasSalon1(prevMesas =>
        prevMesas.map(m =>
          m.mesa_id === mesa.mesa_id
            ? { ...m, estado: mesa.estado === 'disponible' ? 'reservada' : 'disponible' }
            : m
        )
      );

    } catch (error) {
      console.error('Error al cambiar estado de la mesa:', error);
    }
  };

  const getColor = (mesa) => {
    return mesa?.estado === 'reservada' ? 'red' : 'var(--color-primary)';
  };

  return (
    <div className="container">
      <div className="despacho">Despacho</div>
      <div className="tarima"></div>

      <div className="sala1a">
        <div className='MesaIzquierda1'>
          <div
            className='Mesa1'
            style={{ backgroundColor: getColor(mesasSalon1[0]), cursor: 'pointer' }}
            onClick={() => toggleReserva(mesasSalon1[0])}
          >
            {mesasSalon1[0]?.numero_sillas}
          </div>
        </div>
        <div
          className='Mesa2'
          style={{ backgroundColor: getColor(mesasSalon1[3]), cursor: 'pointer' }}
          onClick={() => toggleReserva(mesasSalon1[3])}
        >
          {mesasSalon1[3]?.numero_sillas}
        </div>
      </div>

      <div className="sala1b">
        <div className="Horizontal1">
          <div
            className='Mesa3'
            style={{ backgroundColor: getColor(mesasSalon1[1]), cursor: 'pointer' }}
            onClick={() => toggleReserva(mesasSalon1[1])}
          >
            {mesasSalon1[1]?.numero_sillas}
          </div>
        </div>

        <div className='vertical1'>
          <div
            className='Mesa4'
            style={{ backgroundColor: getColor(mesasSalon1[4]), cursor: 'pointer' }}
            onClick={() => toggleReserva(mesasSalon1[4])}
          >
            {mesasSalon1[4]?.numero_sillas}
          </div>
          <div
            className='Mesa5'
            style={{ backgroundColor: getColor(mesasSalon1[5]), cursor: 'pointer' }}
            onClick={() => toggleReserva(mesasSalon1[5])}
          >
            {mesasSalon1[5]?.numero_sillas}
          </div>
        </div>
      </div>

      <div className="sala1c">
        <div className="Horizontal2">
          <div
            className='Mesa6'
            style={{ backgroundColor: getColor(mesasSalon1[2]), cursor: 'pointer' }}
            onClick={() => toggleReserva(mesasSalon1[2])}
          >
            {mesasSalon1[2]?.numero_sillas}
          </div>
        </div>

        <div className='vertical2'>
          <div
            className='Mesa7'
            style={{ backgroundColor: getColor(mesasSalon1[6]), cursor: 'pointer' }}
            onClick={() => toggleReserva(mesasSalon1[6])}
          >
            {mesasSalon1[6]?.numero_sillas}
          </div>
          <div
            className='Mesa8'
            style={{ backgroundColor: getColor(mesasSalon1[7]), cursor: 'pointer' }}
            onClick={() => toggleReserva(mesasSalon1[7])}
          >
            {mesasSalon1[7]?.numero_sillas}
          </div>
        </div>
      </div>

      <div className="sala1d">
        <div
          className='Mesa9'
          style={{ backgroundColor: getColor(mesasSalon1[8]), cursor: 'pointer' }}
          onClick={() => toggleReserva(mesasSalon1[8])}
        >
          {mesasSalon1[8]?.numero_sillas}
        </div>
        <div
          className='Mesa10'
          style={{ backgroundColor: getColor(mesasSalon1[9]), cursor: 'pointer' }}
          onClick={() => toggleReserva(mesasSalon1[9])}
        >
          {mesasSalon1[9]?.numero_sillas}
        </div>
      </div>

      <div className="sala2a"></div>
      <div className="sala2b"></div>
      <div className="sala2c"></div>
      <div className="sala2d"></div>
    </div>
  );
};

export default SalonesProvenza;
