import './App.css';
import React, { useState } from 'react';
import FechaHoraFormulario from './components/FechaHoraForm';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [dateText, setDateText] = useState('');

  const dataTypes = {
    "Comunicado charlas y simulacros de evacuación": {
        "option": "Comunicado charlas y simulacros de evacuación",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"select", "valores":["presencial","virtual"], "label":"Modalidad"},
        "3": {"tipo":"texto", "label":"Ubicación"}
    },
    "Comunicado desinfección de áreas comunes": {
        "option": "Comunicado desinfección de áreas comunes",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"texto", "label":"Ubicación"}
    },
    "Comunicado fumigación y desaratización": {
        "option": "Comunicado fumigación y desaratización",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"texto", "label":"Ubicación"},
        "3": {"tipo":"entero", "label": "Horas de espera"}
    },
    "Comunicado limpieza de fachada de vidrio": {
        "option": "Comunicado limpieza de fachada de vidrio",
        "1": {"tipo":"date", "label":"Fecha(s)"}
    },
    "Comunicado limpieza muro cortina": {
        "option": "Comunicado limpieza muro cortina",
        "1": {"tipo":"date", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de aire acondicionado": {
        "option": "Comunicado mantenimiento de aire acondicionado",
        "1": {"tipo":"date", "label":"Fecha(s)"},
        "2": {"tipo":"select", "label":"Disponibilidad de servicio", "valores":["Por tal motivo, no tendremos dicho servicio ese día.", "Sin embargo, la ejecución de los trabajos no afectará el funcionamiento del servicio."]}
    },
    "Comunicado mantenimiento de ascensores": {
        "option": "Comunicado mantenimiento de ascensores",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"entero", "label": "Ascensores operativos"}
    },
    "Comunicado mantenimiento de bombas de agua y desagüe": {
        "option": "Comunicado mantenimiento de bombas de agua y desagüe",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de dispositivos de seguridad": {
        "option": "Comunicado mantenimiento de dispositivos de seguridad",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de mamparas": {
        "option": "Comunicado mantenimiento de mamparas",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de plataformas para personas con discapacidad": {
        "option": "Comunicado mantenimiento de plataformas para personas con discapacidad",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de pozos a tierra": {
        "option": "Comunicado mantenimiento de pozos a tierra",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de puertas cortafuegos": {
        "option": "Comunicado mantenimiento de puertas cortafuegos",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de puertas de ingreso vehicular": {
        "option": "Comunicado mantenimiento de puertas de ingreso vehicular",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de subestación eléctrica": {
        "option": "Comunicado mantenimiento de subestación eléctrica",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de tableros de transferencia y banco de condensadores": {
        "option": "Comunicado mantenimiento de tableros de transferencia y banco de condensadores",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de tableros eléctricos": {
        "option": "Comunicado mantenimiento de tableros eléctricos",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de torre de enfriamiento": {
        "option": "Comunicado mantenimiento de torre de enfriamiento",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento equipos multimedia": {
        "option": "Comunicado mantenimiento equipos multimedia",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento Sistema Contra Incendio (SCI)": {
        "option": "Comunicado mantenimiento Sistema Contra Incendio (SCI)",
        "1": {"tipo":"date", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento sistema preventivo de seguridad": {
        "option": "Comunicado mantenimiento sistema preventivo de seguridad",
        "1": {"tipo":"date", "label":"Fecha(s)"},
        "2": {"tipo":"time", "label":"Desde / Hasta"}
    },
    "Comunicado saneamiento ambiental": {
        "option": "Comunicado saneamiento ambiental",
        "1": {"tipo":"date", "label":"Fecha(s)"}
    },
    "Comunicado vacaciones": {
        "option": "Comunicado vacaciones",
        "1": {"tipo":"date", "label":"Fecha(s)"},
        "2": {"tipo":"select", "label":"Abreviación Persona de Salida", "valores":["Sra.","Sr.","Srta."]},
        "3": {"tipo":"texto", "label":"Nombre de Persona de Salida"},
        "4": {"tipo":"select", "label":"Abreviación de Backup", "valores":["Sra.","Sr.","Srta."]},
        "5": {"tipo":"texto", "label":"Nombre de Backup"}
    }
  };

  const dataTypesArray = Object.entries(dataTypes).map(([key, value]) => {
      // Aquí puedes realizar las operaciones que desees con cada par clave-valor
      // Por ejemplo, puedes crear un nuevo objeto con la clave y el valor modificado
      return {
          nombre: key
      };
  });

  const fieldsToList = (object) => {
    const result = Object.keys(object)
    .filter(key => !isNaN(key))
    .sort((a, b) => a - b);
    return result;
  };

  const handleOptionClick = (value) => {
    setSearchTerm(value.nombre);
    setIsOpen(false);
    setSelectedOption(value.nombre)
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {}; // Objeto vacío para almacenar los valores
    formData['y1'] = dateText;
    fieldsToList(dataTypes[selectedOption]).forEach((field, index) => {
      const fieldType = dataTypes[selectedOption][field].tipo;
      if (fieldType === 'datetime') {
        // Si el tipo es 'datetime', no hacemos nada
        return;
      }

      // Si el tipo es 'select' o cualquier otro tipo, obtenemos su valor
      let value;
      if (fieldType === 'select') {
        const selectElement = document.getElementsByName(field)[0];
        value = selectElement.options[selectElement.selectedIndex].value;
      } else {
        value = document.getElementsByName(field)[0].value;
      }

      formData[`y${index + 1}`] = value; // Asignar al objeto usando clave dinámica
    });

    // Aquí puedes usar formData como desees, por ejemplo, enviarlo a través de una solicitud HTTP
    console.log(formData);
  }

  const filteredOptions = dataTypesArray.filter((option) =>
    option.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="select" className="block text-gray-700 font-bold mb-2">
            Selecciona una opción:
          </label>
          <input
            type="text"
            placeholder="Buscar o seleccionar..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {isOpen && (<div className="absolute z-10 bg-white border rounded w-full mt-1 overflow-y-auto max-h-80 max-w-sm">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                onMouseDown={() => handleOptionClick(option)}
                className="cursor-pointer hover:bg-gray-100 py-1 px-3"
              >
                {option.nombre}
              </div>
            ))}
          </div>)}
        </div>
        {(selectedOption!=='') && dataTypes[selectedOption] && 
        <div>
          {fieldsToList(dataTypes[selectedOption]).map((field, index) => (
              <div key={index}>
                <label htmlFor="select" className="block text-gray-700 font-bold mb-2">
                  {dataTypes[selectedOption][field].label}:
                </label>
                {dataTypes[selectedOption][field].tipo === 'select' &&
                <div>
                  <select name={field}>
                    {dataTypes[selectedOption][field].valores.map((option, index) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>}
                {dataTypes[selectedOption][field].tipo === 'datetime' &&
                 <FechaHoraFormulario
                    setDateText = {setDateText}
                 />
                }
                {dataTypes[selectedOption][field].tipo !== 'select' &&
                dataTypes[selectedOption][field].tipo !== 'datetime' &&
                <input
                  type='text'
                  name={field}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                />}
              </div>
            ))}
        </div>}
      </form>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </div>
  );
}

export default App;
