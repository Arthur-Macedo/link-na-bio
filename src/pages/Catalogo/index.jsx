import React, { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Detalhes from "../../components/Cortes/detalhes";
import Degrade from "../../Assets/degrade.jpg";
import Pigmentacao from "../../Assets/pigmentacao.jpg";
import Style from "../../Assets/style.jpg";
import Nevou from "../../Assets/nevou.jpg";
import Reflexo from "../../Assets/reflexo.jpg";

const cuts = [
  {
    id: 1,
    name: "Degradê",
    price: "R$ 20,00",
    img: Degrade,
    description: "Um corte moderno que destaca um efeito de degradê.",
  },
  {
    id: 2,
    name: "Nevou",
    price: "R$ 90,00",
    img: Nevou,
    description: "Estilo nevado que combina cor e corte precisos.",
  },
  {
    id: 3,
    name: "Degradê com pigmentação",
    price: "R$ 35,00",
    img: Pigmentacao,
    description: "Degradê com pigmentação para realçar o visual.",
  },
  {
    id: 4,
    name: "Corte mais freeStyle",
    price: "R$ 25,00",
    img: Style,
    description: "Um corte que inclui técnicas avançadas de FreeStyle.",
  },
  {
    id: 5,
    name: "Reflexo alinhado",
    price: "R$ 75,00",
    img: Reflexo,
    description: "Reflexos alinhados para um visual elegante e sofisticado.",
  },
  {
    id: 1,
    name: "Social",
    price: "R$ 20,00",
    img: Degrade,
    description: "Um corte moderno que destaca autenticidade.",
  },
];

function CatalogPage() {
  const [selectedCut, setSelectedCut] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0); 

  const handleCutClick = (cut) => {
    setScrollPosition(window.scrollY);
    setSelectedCut(cut);
  };

  const handleCloseDetail = () => {
    setSelectedCut(null);
    window.scrollTo(0, scrollPosition);
  };

  return (
    <div className="bg-black min-h-screen p-6">
      {selectedCut ? (
        <Detalhes cut={selectedCut} onClose={handleCloseDetail} />
      ) : (
        <>
          <div className="flex items-center space-x-6 p-4">
            <Link to="/" className="text-orange-300 hover:text-orange-400">
              <IoMdArrowRoundBack size={26} />
            </Link>

            <div className="text-white">
              <h1 className="text-2xl font-semibold">Catálogo de Cortes</h1>
            </div>
          </div>

          {/* Grid de cortes */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cuts.map((cut) => (
              <div
                key={cut.id}
                onClick={() => handleCutClick(cut)}
                className="flex flex-col px-1 py-2 border-2 rounded-2xl shadow-md hover:bg-gray-700 transition transform hover:scale-105 cursor-pointer"
              >
                <div className="flex justify-center">
                  <img
                    src={cut.img}
                    alt={cut.name}
                    className="w-64 h-48 object-cover rounded-lg mt-1 mb-4"
                  />
                </div>

                <div className="ml-10">
                  <h2 className="text-white text-xl font-semibold">{cut.name}</h2>
                  <p className="text-gray-400 text-lg">{cut.price}</p>
                  <p className="text-gray-300 mt-4">{cut.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CatalogPage;
