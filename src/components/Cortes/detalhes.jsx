import React from 'react';

const Detalhes = ({ cut, onClose }) => {
  if (!cut) {
    return <p className="text-white">Corte não encontrado</p>;
  }

  return (
    <div className="bg-black min-h-screen p-4 fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-700 p-6 rounded-lg w-full sm:w-96">
        <button onClick={onClose} className="text-orange-300 mb-6">&larr; Voltar para o catálogo</button>
        
        <img
          src={cut.img}
          alt={cut.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-white text-3xl font-bold mt-4">{cut.name}</h1>
        <p className="text-gray-400 text-xl mt-2">{cut.price}</p>
        <p className="text-gray-300 mt-4">{cut.description}</p>
      </div>
    </div>
  );
};

export default Detalhes;

