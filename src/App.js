import './App.css';
import React, { useState } from 'react';
import FechaHoraFormulario from './components/FechaHoraForm';
//import DownloadImage from './components/DownloadImage';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [dateText, setDateText] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevSelectedOptions) => {
      if (checked) {
        // Añadir el valor al array de opciones seleccionadas
        return [...prevSelectedOptions, name];
      } else {
        // Eliminar el valor del array de opciones seleccionadas
        return prevSelectedOptions.filter((option) => option !== name);
      }
    });
  };


  const options = [
    {edificio: "TORRE SIGLO XXI", correo: "Bruno.Rossi@rems.pe", articulo: "de la"},
    {edificio: "TORRE PARQUE MAR", correo: "Patricia.Morel@rems.pe", articulo: "de la"},
    {edificio: "EDIFICIO NACIONAL", correo: "Marani.Rios@rems.pe", articulo: "del"},
    {edificio: "CENTRO EJECUTIVO CHACARILLA", correo: "Jacson.Estrada@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO AENZA", correo: "Kevin.Rivera@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO SANTO TORIBIO", correo: "Luis.Ancajima@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO VICTOR ANDRES BELAUNDE", correo: "Richard.Almeida@rems.pe", articulo: "del"},
    {edificio: "ESTACIONAMIENTOS JW MARRIOTT - TPM", correo: "Patricia.Morel@rems.pe", articulo: "de los"},
    {edificio: "EDIFICIO CAPITAL", correo: "Virginia.Aravena@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL POLO HUNT II", correo: "Martin.Alva@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL REDUCTO", correo: "ejecutivo.operaciones@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO LARCO", correo: "Wilson.Romero@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO FUNDACION", correo: "Zenobio.Meneses@rems.pe", articulo: "del"},
    {edificio: "CENTRO COMERCIAL SANTA MARIA", correo: "Miguel.Escobedo@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL TORRE PINAR", correo: "Jacson.Estrada@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO METROPOLIS", correo: "Rino.Calderon@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO CORPORATIVO QUBO", correo: "Luis.Perez@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO LA HABANA", correo: "ejecutivo.operaciones@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL SAN ISIDRO", correo: "Charlets.Cespedes@rems.pe", articulo: "del"},
    {edificio: "LAS TORRES SAN ISIDRO", correo: "JoseLuis.Pacherres@rems.pe", articulo: "de"},
    {edificio: "EDIFICIO MIRACORP", correo: "ejecutivo.operaciones@rems.pe", articulo: "del"},
    {edificio: "MACROS EDIFICIO EMPRESARIAL", correo: "Andrea.Bazo@rems.pe", articulo: "de"},
    {edificio: "TORRE AMERICA", correo: "Marani.Rios@rems.pe", articulo: "de la"},
    {edificio: "CENTRO EMPRESARIAL JUAN DE ARONA", correo: "Romel.Elias@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO PARDO Y ALIAGA", correo: "Manuel.Paulino@rems.pe", articulo: "del"},
    {edificio: "REDUCTO BUSINESS CENTER", correo: "Bruno.Rossi@rems.pe", articulo: "de"},
    {edificio: "EDIFICIO GERENS", correo: "Martin.Alva@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO CHOCAVENTO", correo: "Antonio.Forno@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO EMPRESARIAL OMEGA", correo: "Lorena.Contreras@rems.pe", articulo: "del"},
    {edificio: "LINK TOWER", correo: "Danny.Trigoso@rems.pe", articulo: "de"},
    {edificio: "ONYX BUSINESS CENTER", correo: "Carlos.Goitizolo@rems.pe", articulo: "de"},
    {edificio: "EDIFICIO 991", correo: "Gabriel.Rivera@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO EMPRESARIAL GRAU", correo: "Kevin.Rivera@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL QUATTRO", correo: "Bruno.Rossi@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO BASADRE 233", correo: "Adrian.Quino@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO CORPORATIVO AENZA", correo: "Kevin.Rivera@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO SANTA CRUZ", correo: "ejecutivo.operaciones@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL LEURO", correo: "Hugo.Garcia@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL TANGÜIS", correo: "Mario.Caspani@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO LIBERTADORES", correo: "Jesus.Enriquez@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL LA MOLINA", correo: "Jaime.Chavez@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO VITRA", correo: "Rino.Calderon@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO CORPORATIVO ROOSEVELT", correo: "AnaMaria.Caceres@rems.pe", articulo: "del"},
    {edificio: "TORRE BARLOVENTO", correo: "Luis.Ancajima@rems.pe", articulo: "de la"},
    {edificio: "EDIFICIO TORRE ORQUIDEAS", correo: "David.Campos@rems.pe", articulo: "del"},
    {edificio: "TORRE NAVARRETE", correo: "Nadia.Aspiazu@rems.pe", articulo: "de la"},
    {edificio: "PANORAMA CENTRO EMPRESARIAL", correo: "Giancarlo.Bertarelli@rems.pe", articulo: "de"},
    {edificio: "EDIFICIO ALBERTO DEL CAMPO 409", correo: "Juan.Idrogo@rems.pe", articulo: "del"},
    //{edificio: "JUNTA DE PROPIETARIOS DE LA TORRE 1", correo: "Daniel.Garces@rems.pe", articulo: "de la"},
    {edificio: "EDIFICIO PARQUE LAS LOMAS", correo: "Dolores.Visconti@rems.pe", articulo: "del"},
    {edificio: "PRISMA BUSINESS TOWER", correo: "Patricia.Valdivia@rems.pe", articulo: "de"},
    {edificio: "EDIFICIO BASADRE 607", correo: "Liset.Severino@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL ABRIL", correo: "Ricardo.Porras@rems.pe", articulo: "del"},
    {edificio: "PRIME TOWER", correo: "Diego.Mendoza@rems.pe", articulo: "de"},
    {edificio: "OFIS TOWER", correo: "Diana.Sosa@rems.pe", articulo: "de"},
    {edificio: "ICHMA EDIFICIO CORPORATIVO", correo: "Vidal.Alvitres@rems.pe", articulo: "de"},
    {edificio: "EDIFICIO TRILLIUM TOWER", correo: "Wilson.Romero@rems.pe", articulo: "del"},
    {edificio: "CENTRO EMPRESARIAL VOLTERRA", correo: "Manuel.Paulino@rems.pe", articulo: "del"},
    {edificio: "TORRE WIESE", correo: "Gino.Poggi@rems.pe", articulo: "de la"},
    {edificio: "EDIFICIO ALIAGA 360", correo: "Rafael.Bejarano@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO T-TOWER", correo: "Felipe.Pena@rems.pe", articulo: "del"},
    {edificio: "TORRE TEKTON", correo: "Armando.Flores@rems.pe", articulo: "de la"},
    {edificio: "TORRE FORUM", correo: "Juan.Chanta@rems.pe", articulo: "de la"},
    {edificio: "PATIO ABTAO", correo: "Jenny.Reyes@rems.pe", articulo: "de"},
    {edificio: "PATIO CENTRIC", correo: "Gladys.Heredia@rems.pe", articulo: "de"},
    {edificio: "LIT ONE", correo: "Ninoska.Rojas@rems.pe", articulo: "de"},
    {edificio: "FIBRA PASEO DEL BOSQUE", correo: "Rolando.Turpo@rems.pe", articulo: "de"},
    {edificio: "CENTRO EMPRESARIAL BASADRE (ESTAC.)", correo: "Gladys.Heredia@rems.pe", articulo: "del"},
    {edificio: "TORRE PANAMÁ", correo: "William.Espinoza@rems.pe", articulo: "de la"},
    //{edificio: "EDIFICIO DEAN VALDIVIA N° 1 (China Railway)", correo: "AnaMaria.Caceres@rems.pe", articulo: "del"},
    {edificio: "PATIO CAMELIAS", correo: "Carola.Montezuma@rems.pe", articulo: "de"},
    {edificio: "EDIFICIO CREDISCOTIA", correo: "Darwin.Tafur@rems.pe", articulo: "del"},
    {edificio: "TORRE SANTA LUISA", correo: "William.Espinoza@rems.pe", articulo: "de la"},
    {edificio: "EDIFICIO PERSHING TOWER", correo: "Karina Pareja@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO EMPRESARIAL ESQUILACHE", correo: "Darwin.Zapata@rems.pe | Luis.Saavedra@rems.pe", articulo: "del"},
    {edificio: "CENTRO DE CONVENCIONES Y OFICINAS CAMINO REAL", correo: "Darwin.Zapata@rems.pe | Luis.Saavedra@rems.pe", articulo: "del"},
    {edificio: "EDIFICIO TORRE 28", correo: "dallyn.carrasco@rems.pe", articulo: "del"},
    {edificio: "FIBRA-CAMINO REAL", correo:"Antonio.Forno@rems.pe",articulo: "de"}
] ;

  const forAll = {
    "1": {"tipo":"select", "valores":["Usuarios","Propietarios", "Usuarios y Propietarios","Usuario","Propietario", "Usuario y Propietario"], "label":"Dirigido a"},
    "2": {"tipo":"select", "valores":options.map(objeto => objeto.articulo +" "+ objeto.edificio), "label":"Edificio"},
    "3": {"tipo":"oneDate", "label":"Fecha de emisión del comunicado"}
  }
  const dataTypes = {
    "Comunicado capacitación de brigadas": {
        "option": "Comunicado capacitación de brigadas",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"select", "valores":["presencial","virtual"], "label":"Modalidad"},
        "3": {"tipo":"texto", "label":"Ubicación"}
    },
    "Comunicado desinfección de áreas comunes y privadas": {
        "option": "Comunicado desinfección de áreas comunes y privadas",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"entero", "label":"Horas de espera antes de pasar por las áreas"}
    },
    "Comunicado desinfección de áreas comunes": {
        "option": "Comunicado desinfección de áreas comunes y privadas",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"entero", "label":"Horas de espera antes de pasar por las áreas"}
    },
    "Comunicado fumigación": {
        "option": "Comunicado fumigación",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"entero", "label": "Horas de espera antes de pasar por las áreas"}
    },
    "Comunicado limpieza de fachada de vidrio": {
        "option": "Comunicado limpieza de fachada de vidrio",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado inspección de muro cortina": {
        "option": "Comunicado inspección de muro cortina",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"entero", "label":"Tiempo estimado de demora en minutos"}
    },
    "Comunicado limpieza muro cortina": {
        "option": "Comunicado limpieza muro cortina",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
    },
    "Comunicado mantenimiento de aire acondicionado": {
        "option": "Comunicado mantenimiento de aire acondicionado",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"select", "label":"Disponibilidad de servicio", "valores":["Por tal motivo, no tendremos dicho servicio ese día.", "Sin embargo, la ejecución de los trabajos no afectará el funcionamiento del servicio."]}
    },
    "Comunicado mantenimiento de ascensores": {
        "option": "Comunicado mantenimiento de ascensores",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"entero", "label": "Ascensores operativos"}
    },
    //"Comunicado mantenimiento de bombas de agua y desagüe": {
    //    "option": "Comunicado mantenimiento de bombas de agua y desagüe",
    //    "1": {"tipo":"datetime", "label":"Fecha(s)"}
    //},
    //"Comunicado mantenimiento de dispositivos de seguridad": {
    //    "option": "Comunicado mantenimiento de dispositivos de seguridad",
    //    "1": {"tipo":"datetime", "label":"Fecha(s)"}
    //},
    "Comunicado mantenimiento de grupo electrógeno": {
        "option": "Comunicado mantenimiento de grupo electrógeno",
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
    "Comunicado mantenimiento de puertas vehiculares": {
        "option": "Comunicado mantenimiento de puertas de ingreso vehicular",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"texto", "label": "Hora de inicio (formato 24 horas) ejemplo: 08:30"},
        "3": {"tipo":"texto", "label": "Hora de fin (formato 24 horas) ejemplo: 15:00"}
    },
    "Comunicado mantenimiento de subestación eléctrica": {
        "option": "Comunicado mantenimiento de subestación eléctrica",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    //"Comunicado mantenimiento de tableros de transferencia y banco de condensadores": {
    //    "option": "Comunicado mantenimiento de tableros de transferencia y banco de condensadores",
    //    "1": {"tipo":"datetime", "label":"Fecha(s)"}
    //},
    "Comunicado mantenimiento de tableros eléctricos": {
        "option": "Comunicado mantenimiento de tableros eléctricos",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de la torre de enfriamiento": {
        "option": "Comunicado mantenimiento de la torre de enfriamiento",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento de equipos multimedia": {
        "option": "Comunicado mantenimiento equipos multimedia",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    "Comunicado mantenimiento Sistema Contra Incendio": {
        "option": "Comunicado mantenimiento Sistema Contra Incendio",
        "1": {"tipo":"datetime", "label":"Fecha(s)"}
    },
    //"Comunicado mantenimiento sistema preventivo de seguridad": {
    //    "option": "Comunicado mantenimiento sistema preventivo de seguridad",
    //    "1": {"tipo":"datetime", "label":"Fecha(s)"},
    //    "2": {"tipo":"time", "label":"Desde / Hasta"}
    //},
    "Comunicado saneamiento ambiental": {
        "option": "Comunicado saneamiento ambiental",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"checkbox", "label":"Actividades", "valores":["El lavado de cisterna de agua","El lavado de pozo sumidero", "Fumigación de las áreas comunes"]}
    },
    "Comunicado vacaciones": {
        "option": "Comunicado vacaciones",
        "1": {"tipo":"datetime", "label":"Fecha(s)"},
        "2": {"tipo":"select", "label":"Abreviación Persona de Salida", "valores":["Sra.","Sr.","Srta."]},
        "3": {"tipo":"texto", "label":"Nombre de Persona de Salida"},
        "4": {"tipo":"select", "label":"Abreviación de Backup", "valores":["Sra.","Sr.","Srta."]},
        "5": {"tipo":"texto", "label":"Nombre de Backup"}
    }
  };

  function convertDate(isoDate) {
    // Parse the date components from the ISO format
    const [year, month, day] = isoDate.split('-');

    // Format the date as DD/MM/YYYY
    const formattedDate = `${parseInt(day)}/${parseInt(month)}/${year}`;
    return formattedDate;
}

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
    var esSingular = false;
    const paraOpciones = ["Usuario","Propietario"];
    const paraOpcT = ["Usuarios","Propietarios", "Usuarios y Propietarios","Usuario","Propietario", "Usuario y Propietario"];
    fieldsToList(forAll).forEach((field, index) => {
      const fieldType = forAll[field].tipo;
      if (fieldType === 'datetime') {
        // Si el tipo es 'datetime', no hacemos nada
        return;
      }

      // Si el tipo es 'select' o cualquier otro tipo, obtenemos su valor
      let value;
      if (fieldType === 'select') {
        const selectElement = document.getElementsByName("x"+field)[0];
        value = selectElement.options[selectElement.selectedIndex].value;
        
        if (paraOpciones.includes(value) ){
          esSingular=true;
          value = "Estimado "+ value
        }
        else if (paraOpcT.includes(value)){
          value = "Estimados "+ value
        }
      } else {
        value = document.getElementsByName("x"+field)[0].value;
      }

      if (fieldType === 'oneDate') {
        value = convertDate(value);
      }

      formData[`x${index + 1}`] = value; // Asignar al objeto usando clave dinámica
    });
    fieldsToList(dataTypes[selectedOption]).forEach((field, index) => {
      const fieldType = dataTypes[selectedOption][field].tipo;
      if (fieldType === 'datetime') {
        // Si el tipo es 'datetime', no hacemos nada
        return;
      }

      // Si el tipo es 'select' o cualquier otro tipo, obtenemos su valor
      let value;
      if (fieldType === 'select') {
        const selectElement = document.getElementsByName("y"+field)[0];
        value = selectElement.options[selectElement.selectedIndex].value;
      } else if (fieldType === 'checkbox') {
        value = selectedOptions.map(option => `-    ${option}`).join('\n');
      } else {
        value = document.getElementsByName("y"+field)[0].value;
      }
  

      formData[`y${index + 1}`] = value; // Asignar al objeto usando clave dinámica
    });

    console.log(formData);
    const templateName = esSingular? selectedOption + "-individual" : selectedOption;
    console.log(formData);
    const response = await fetch(
      //'http://164.68.101.193:5001/upload'
      'http://164.68.101.193:5002/process_ppt'
      , {
      method: 'POST',
      body: JSON.stringify({"template": templateName,"data": formData}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error al enviar los datos');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    // Crear un enlace de descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = 'imagen.png';  // El nombre con el que se descargará la imagen
    document.body.appendChild(a);  // Necesario para que funcione en Firefox
    a.click();
    a.remove();
  }

  const filteredOptions = dataTypesArray.filter((option) =>
    option.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="w-full max-w-2xl max-h-[92dvh] bg-white p-8 rounded-lg shadow-lg overflow-y-auto" onSubmit={handleSubmit}>
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
          {isOpen && (
            <div className="absolute z-10 bg-white border rounded w-full mt-1 overflow-y-auto max-h-80 max-w-sm shadow-lg">
              {filteredOptions.map((option, index) => (
                <div
                  key={index}
                  onMouseDown={() => handleOptionClick(option)}
                  className="cursor-pointer hover:bg-gray-100 py-2 px-4"
                >
                  {option.nombre}
                </div>
              ))}
            </div>
          )}
        </div>
        {(selectedOption !== '') && dataTypes[selectedOption] &&
          <div>
            <div>
              {fieldsToList(forAll).map((field, index) => (
                <div key={index} className="mb-4">
                  <label htmlFor={`x${field}`} className="block text-gray-700 font-bold mb-2">
                    {forAll[field].label}:
                  </label>
                  {forAll[field].tipo === 'select' &&
                    <div>
                      <select name={`x${field}`} className="block w-full bg-white border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-gray-500">
                        {forAll[field].valores.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  }
                  {forAll[field].tipo === 'oneDate' &&
                    <input
                      type='date'
                      name={`x${field}`}
                      className="block w-full bg-white border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-gray-500"
                    />
                  }
                </div>
              ))}
            </div>
            <div>
              {fieldsToList(dataTypes[selectedOption]).map((field, index) => (
                <div key={index} className="mb-4">
                  <label htmlFor={`y${field}`} className="block text-gray-700 font-bold mb-2">
                    {dataTypes[selectedOption][field].label}:
                  </label>
                  {dataTypes[selectedOption][field].tipo === 'select' &&
                    <div>
                      <select name={`y${field}`} className="block w-full bg-white border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-gray-500">
                        {dataTypes[selectedOption][field].valores.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  }
                  {dataTypes[selectedOption][field].tipo === 'checkbox' &&
                    <div>
                        {dataTypes[selectedOption][field].valores.map((option, index) => (
                          <div>
                            <input
                            type='checkbox'
                            name={option}
                            checked={selectedOptions.includes(option)}
                            onChange={handleCheckboxChange}
                            className="form-checkbox h-5 w-5 text-gray-600 mr-3"
                          />
                          {option}
                        </div>
                        ))}
                    </div>
                  }
                  {dataTypes[selectedOption][field].tipo === 'datetime' &&
                    <FechaHoraFormulario
                      setDateText={setDateText}
                    />
                  }
                  {dataTypes[selectedOption][field].tipo !== 'select' && dataTypes[selectedOption][field].tipo !== 'datetime' &&
                  dataTypes[selectedOption][field].tipo !== 'checkbox' &&
                    <input
                      type='text'
                      name={`y${field}`}
                      className="block w-full bg-white border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-gray-500"
                    />
                  }
                </div>
              ))}
            </div>
          </div>
        }
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
        >
          Descargar
        </button>
      </form>
    </div>

  );
}

export default App;
