import React, { useState } from 'react';

const FechaHoraFormulario = ({setDateText}) => {
  const [bloques, setBloques] = useState([{ tipo: 'especificas', fechas: [{ fecha: '', inicio: '', fin: '' }] }]);
  const [frase, setFrase] = useState('');

  const agregarBloqueFecha = () => {
    setBloques([...bloques, { tipo: 'especificas', fechas: [{ fecha: '', inicio: '', fin: '' }] }]);
  };

  const handleTipoChange = (index, tipo) => {
    const nuevosBloques = [...bloques];
    nuevosBloques[index].tipo = tipo;
    if (tipo === 'especificas' || tipo === 'especificasGeneral') {
      nuevosBloques[index].fechas = [{ fecha: '', inicio: '', fin: '' }];
    } else {
      nuevosBloques[index].fechas = [{ fecha: '', inicio: '', fin: '' }, { fecha: '', inicio: '', fin: '' }];
      nuevosBloques[index].horario = { inicio: '', fin: '' };
    }
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
          let frase = `el ${new Date(fecha).toLocaleDateString()}`;
          if (inicio && fin) {
            frase += ` desde las ${inicio} hasta las ${fin} horas`;
          } else if (inicio) {
            frase += ` a partir de las ${inicio} horas`;
          }
          return frase;
        }).join(', ');
      } else if (bloque.tipo === 'especificasGeneral') {
        const fechas = bloque.fechas.filter(fecha => fecha.fecha);
        if (fechas.length === 0) {
          alert('Por favor, ingrese al menos una fecha específica.');
          return '';
        }
        let frase = `el ${fechas.map(fecha => new Date(fecha.fecha).toLocaleDateString()).join(', ')}`;
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
        let fraseRango = `desde el ${new Date(fechaInicio).toLocaleDateString()} hasta el ${new Date(fechaFin).toLocaleDateString()}`;
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
    <div>
      <h2>Seleccionar Fechas y Horas</h2>

      {bloques.map((bloque, index) => (
        <div key={index} className="bloque-fecha">
          <label>Tipo de fecha:</label>
          <input
            type="radio"
            name={`tipo-fecha-${index}`}
            value="especificas"
            checked={bloque.tipo === 'especificas'}
            onChange={() => handleTipoChange(index, 'especificas')}
          /> Fechas específicas con rangos individuales
          <input
            type="radio"
            name={`tipo-fecha-${index}`}
            value="especificasGeneral"
            checked={bloque.tipo === 'especificasGeneral'}
            onChange={() => handleTipoChange(index, 'especificasGeneral')}
          /> Fechas específicas con rango general
          <input
            type="radio"
            name={`tipo-fecha-${index}`}
            value="rango"
            checked={bloque.tipo === 'rango'}
            onChange={() => handleTipoChange(index, 'rango')}
          /> Rango de fechas
          
          {bloque.tipo === 'especificas' && (
            <div className="fechas-especificas">
              {bloque.fechas.map((fecha, fechaIndex) => (
                <div key={fechaIndex}>
                  <input
                    type="date"
                    value={fecha.fecha}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'fecha', e.target.value)}
                  />
                  <input
                    type="time"
                    value={fecha.inicio}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'inicio', e.target.value)}
                    placeholder="Hora de inicio"
                  />
                  <input
                    type="time"
                    value={fecha.fin}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'fin', e.target.value)}
                    placeholder="Hora de fin"
                  />
                </div>
              ))}
              <button type="button" onClick={() => agregarFechaEspecifica(index)}>Agregar otra fecha</button>
            </div>
          )}
          
          {bloque.tipo === 'especificasGeneral' && (
            <div className="fechas-especificas">
              {bloque.fechas.map((fecha, fechaIndex) => (
                <div key={fechaIndex}>
                  <input
                    type="date"
                    value={fecha.fecha}
                    onChange={(e) => handleFechaChange(index, fechaIndex, 'fecha', e.target.value)}
                  />
                </div>
              ))}
              <button type="button" onClick={() => agregarFechaEspecifica(index)}>Agregar otra fecha</button>
              <div>
                <label>Rango horario general:</label>
                <input
                  type="time"
                  value={bloque.horario?.inicio || ''}
                  onChange={(e) => handleRangoHorarioChange(index, 'inicio', e.target.value)}
                  placeholder="Hora de inicio"
                />
                <input
                  type="time"
                  value={bloque.horario?.fin || ''}
                  onChange={(e) => handleRangoHorarioChange(index, 'fin', e.target.value)}
                  placeholder="Hora de fin"
                />
              </div>
            </div>
          )}
          
          {bloque.tipo === 'rango' && (
            <div className="rango-fechas">
              <input
                type="date"
                value={bloque.fechas[0].fecha}
                onChange={(e) => handleFechaChange(index, 0, 'fecha', e.target.value)}
                placeholder="Fecha de inicio"
              />
              <input
                type="date"
                value={bloque.fechas[1].fecha}
                onChange={(e) => handleFechaChange(index, 1, 'fecha', e.target.value)}
                placeholder="Fecha de fin"
              />
              <br />
              <label>Rango horario general:</label>
              <input
                type="time"
                value={bloque.horario?.inicio || ''}
                onChange={(e) => handleRangoHorarioChange(index, 'inicio', e.target.value)}
                placeholder="Hora de inicio"
              />
              <input
                type="time"
                value={bloque.horario?.fin || ''}
                onChange={(e) => handleRangoHorarioChange(index, 'fin', e.target.value)}
                placeholder="Hora de fin"
              />
            </div>
          )}
        </div>
      ))}

      <button type="button" onClick={agregarBloqueFecha}>Agregar lógica de fechas</button>
      <br /><br />
      <button type="button" className='bg-blue-50' onClick={handleSubmit}>Generar texto</button>
      {frase!=='' && <p>{frase}</p>}
    </div>
  );
};

export default FechaHoraFormulario;
