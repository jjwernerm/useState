import { useState } from 'react'; // Importar el hook useState desde React

const Form = () => {
  // Definir los estados locales para almacenar los valores de los inputs y los resultados
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [resultName, setResultName] = useState('');
  const [resultDate, setResultDate] = useState('');

  // Manejar el evento de envío del formulario
  const handleSubmit = e => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recargar la página)

    // Actualizar los estados de los resultados con los valores actuales de los inputs
    setResultName(name);
    setResultDate(date);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-xl w-full mb-10 md:w-2/4">
        <form
          className="p-3"
          onSubmit={handleSubmit} // Asignar la función handleSubmit al evento onSubmit del formulario
        >
          <div className="mb-3">
            <label htmlFor="name" className="text-sm md:text-base font-bold uppercase">Nombre</label>
            <div>
              <input
                type="text"
                id='name'
                placeholder="Escribe aquí tu nombre"
                className="bg-gray-100 rounded-full p-2 focus:outline-none focus:ring-1 focus:border-zinc-400 focus:ring-zinc-400"
                onChange={e => setName(e.target.value)} // Actualizar el estado name cuando el valor del input cambia
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="text-sm md:text-base font-bold uppercase">Fecha</label>
            <div>
              <input
                type="date"
                id='date'
                className="bg-gray-100 rounded-full p-2 focus:outline-none focus:ring-1 focus:border-zinc-400 focus:ring-zinc-400"
                onChange={e => setDate(e.target.value)} // Actualizar el estado date cuando el valor del input cambia
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="submit"
              value='Agregar'
              className="bg-gradient-to-r from-zinc-400 to-neutral-600 rounded-full p-2 w-full text-white uppercase font-bold cursor-pointer hover:from-zinc-500 hover:to-neutral-700"
            />
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-xl w-full mb-10 md:mb-0 md:w-2/4">
        {/* Sección para mostrar los resultados */}
        <p className="p-2 text-sm md:text-base font-bold">NOMBRE: {''}
          <span className="text-sm md:text-base font-normal">{resultName}</span> {/* Mostrar el nombre resultante */}
        </p>
        <p className="p-2 text-sm md:text-base font-bold">FECHA: {''}
          <span className="text-sm md:text-base font-normal">{resultDate}</span> {/* Mostrar la fecha resultante */}
        </p>
      </div>
    </>
  );
};

export default Form;