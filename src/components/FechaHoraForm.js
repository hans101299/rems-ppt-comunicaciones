import React, { useState } from 'react';

const FechaHoraFormulario = ({setDateText}) => {
  const [bloques, setBloques] = useState([{ tipo: 'especificas', fechas: [{ fecha: '', inicio: '', fin: '' }] }]);
  const [frase, setFrase] = useState('');

  const agregarBloqueFecha = () => {
    setBloques([...bloques, { tipo: 'especificas', fechas: [{ fecha: '', inicio: '', fin: '' }] }]);
  };

  const quitarBloqueFecha = (index) => {
    setBloques(bloques.filter((_, i) => i !== index));
  };

  const handleTipoChange = (index, tipo) => {
    const nuevosBloques = [...bloques];
    nuevosBloques[index].tipo = tipo;
    if (tipo === 'especificas' || tipo === 'especificasGeneral') {
      nuevosBloques[index].fechas = [{ fecha: '', inicio: '', fin: '' }];
    } else {
      nuevosBloques[index].fechas = [{ fecha: '', inicio: '', fin: '' }, { fecha: '', inicio: '', fin: '' }];
    }
    nuevosBloques[index].horario = { inicio: '', fin: '' };
    setBloques(nuevosBloques);
  };

  const handleFechaChange = (bloqueIndex, fechaIndex, field, valor) => {
    const nuevosBloques = [...bloques];
    nuevosBloques[bloqueIndex].fechas[fechaIndex][field] = valor;
    setBloques(nuevosBloques);
  };

  const agregarFechaEspecifica = (index) => {
    const nuevosBloques = [...bloques];
    nuevosBloques[index].fechas.push({ fecha: '', inicio: '', fin: '' });
    setBloques(nuevosBloques);
  };

  const handleRangoHorarioChange = (index, field, valor) => {
    const nuevosBloques = [...bloques];
    console.log(nuevosBloques)
    nuevosBloques[index].horario[field] = valor;
    setBloques(nuevosBloques);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const frases = bloques.map((bloque) => {
      if (bloque.tipo === 'especificas') {
        const fechas = bloque.fechas.filter(fecha => fecha.fecha);
        if (fechas.length === 0) {
          alert('Por favor, ingrese al menos una fecha específica.');
          return '';
        }
        return fechas.map(({ fecha, inicio, fin }) => {
          let frase = `el ${new Date(fecha).toLocaleDateString("es-PE", {timeZone: "UTC"})}`;
          if (inicio && fin) {
            frase += ` desde las ${inicio} hasta las ${fin} horas`;
          } else if (inicio) {
            frase += ` a partir de las ${inicio} horas`;
          }
          return frase;
        }).join(', ');
      } else if (bloque.tipo === 'especificasGeneral') {
        const fechas = bloque.fechas.filter(fecha => fecha.fecha);
        console.log(fechas);
        if (fechas.length === 0) {
          alert('Por favor, ingrese al menos una fecha específica.');
          return '';
        }
        let frase = `el ${fechas.map(fecha => new Date(fecha.fecha).toLocaleDateString("es-PE", {timeZone: "UTC"})).join(', ')}`;
        if (bloque.horario.inicio && bloque.horario.fin) {
          frase += ` desde las ${bloque.horario.inicio} hasta las ${bloque.horario.fin} horas`;
        } else if (bloque.horario.inicio) {
          frase += ` a partir de las ${bloque.horario.inicio} horas`;
        }
        return frase;
      } else if (bloque.tipo === 'rango') {
        const fechaInicio = bloque.fechas[0].fecha;
        const fechaFin = bloque.fechas[1].fecha;
        if (!fechaInicio || !fechaFin) {
          alert('Por favor, ingrese el rango de fechas completo.');
          return '';
        }
        let fraseRango = `desde el ${new Date(fechaInicio).toLocaleDateString("es-PE", {timeZone: "UTC"})} hasta el ${new Date(fechaFin).toLocaleDateString("es-PE", {timeZone: "UTC"})}`;
        if (bloque.horario.inicio && bloque.horario.fin) {
          fraseRango += ` desde las ${bloque.horario.inicio} hasta las ${bloque.horario.fin} horas`;
        } else if (bloque.horario.inicio) {
          fraseRango += ` a partir de las ${bloque.horario.inicio} horas`;
        }
        return fraseRango;
      }
      return '';
    });

    console.log(frases.filter(frase => frase).join('; '));
    setDateText(frases.filter(frase => frase).join('; '));
    setFrase(frases.filter(frase => frase).join('; '));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Seleccionar Fechas y Horas</h2>

      {bloques.map((bloque, index) => (
        <div key={index} className="bloque-fecha mb-6 p-4 border rounded-lg">
          <div className='flex justify-between'>
            <label className="block text-gray-700 font-semibold mb-2">Tipo de fecha:</label>
            <button type="button" onClick={() => quitarBloqueFecha(index)} className="w-20 mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Quitar
            </button>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name={`tipo-fecha-${index}`}
                value="especificas"
                checked={bloque.tipo === 'especificas'}
                onChange={() => handleTipoChange(index, 'especificas')}
                className="form-radio"
              /> Fechas específicas con rangos individuales
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name={`tipo-fecha-${index}`}
                value="especificasGeneral"
                checked={bloque.tipo === 'especificasGeneral'}
                onChange={() => handleTipoChange(index, 'especificasGeneral')}
                className="form-radio"
              /> Fechas específicas con rango general
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name={`tipo-fecha-${index}`}
                value="rango"
                checked={bloque.tipo === 'rango'}
                onChange={() => handleTipoChange(index, 'rango')}
                className="form-radio"
              /> Rango de fechas
            </label>
          </div>

          {bloque.tipo === 'especificas' && (
            <div className="fechas-especificas">
              {bloque.fechas.map((fecha, fechaIndex) => (
                <div key={fechaIndex} className="flex items-center mb-2">
                  <input
                    type="date"
                    value={fecha.fecha}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'fecha', e.target.value)}
                    className="form-input w-1/3 mr-2"
                  />
                  <input
                    type="time"
                    value={fecha.inicio}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'inicio', e.target.value)}
                    placeholder="Hora de inicio"
                    className="form-input w-1/3 mr-2"
                  />
                  <input
                    type="time"
                    value={fecha.fin}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'fin', e.target.value)}
                    placeholder="Hora de fin"
                    className="form-input w-1/3"
                  />
                </div>
              ))}
              <button type="button" onClick={() => agregarFechaEspecifica(index)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Agregar otra fecha
              </button>
            </div>
          )}

          {bloque.tipo === 'especificasGeneral' && (
            <div className="fechas-especificas">
              {bloque.fechas.map((fecha, fechaIndex) => (
                <div key={fechaIndex} className="mb-2">
                  <input
                    type="date"
                    value={fecha.fecha}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'fecha', e.target.value)}
                    className="form-input w-full"
                  />
                </div>
              ))}
              <button type="button" onClick={() => agregarFechaEspecifica(index)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Agregar otra fecha
              </button>
              <div className="mt-4">
                <label className="block text-gray-700 font-semibold mb-2">Rango horario general:</label>
                <div className="flex items-center">
                  <input
                    type="time"
                    value={bloque.horario?.inicio || ''}
                    onChange={(e) => handleRangoHorarioChange(index, 'inicio', e.target.value)}
                    placeholder="Hora de inicio"
                    className="form-input w-1/2 mr-2"
                  />
                  <input
                    type="time"
                    value={bloque.horario?.fin || ''}
                    onChange={(e) => handleRangoHorarioChange(index, 'fin', e.target.value)}
                    placeholder="Hora de fin"
                    className="form-input w-1/2"
                  />
                </div>
              </div>
            </div>
          )}

          {bloque.tipo === 'rango' && (
            <div className="rango-fechas">
              <div className="flex items-center mb-2">
                <input
                  type="date"
                  value={bloque.fechas[0].fecha}
                  onChange={(e) => handleFechaChange(index, 0, 'fecha', e.target.value)}
                  placeholder="Fecha de inicio"
                  className="form-input w-1/2 mr-2"
                />
                <input
                  type="date"
                  value={bloque.fechas[1].fecha}
                  onChange={(e) => handleFechaChange(index, 1, 'fecha', e.target.value)}
                  placeholder="Fecha de fin"
                  className="form-input w-1/2"
                />
              </div>
              <label className="block text-gray-700 font-semibold mb-2">Rango horario general:</label>
              <div className="flex items-center">
                <input
                  type="time"
                  value={bloque.horario?.inicio || ''}
                  onChange={(e) => handleRangoHorarioChange(index, 'inicio', e.target.value)}
                  placeholder="Hora de inicio"
                  className="form-input w-1/2 mr-2"
                />
                <input
                  type="time"
                  value={bloque.horario?.fin || ''}
                  onChange={(e) => handleRangoHorarioChange(index, 'fin', e.target.value)}
                  placeholder="Hora de fin"
                  className="form-input w-1/2"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <button type="button" onClick={agregarBloqueFecha} className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Agregar lógica de fechas
      </button>
      <br /><br />
      <button type="button" onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Generar texto
      </button>
      {frase !== '' && <p className="mt-4 text-lg text-gray-700">{frase}</p>}
    </div>

  );
};

export default FechaHoraFormulario;
