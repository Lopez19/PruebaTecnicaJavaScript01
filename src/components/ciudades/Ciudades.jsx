import React from "react";
import "../../assets/scss/components/Ciudades/_ciudades.scss";

export const Ciudades = () => {
  const listaCiudades = [
    "Bogota",
    "Cali",
    "Bogota",
    "Medellin",
    "Bogota",
    "Medellin",
    "Bogota",
    "Cali",
    "Bogota",
    "Neiva",
    "Bogota",
    "Cali",
    "Bogota",
    "Medellin",
    "Buenaventura",
    "Buenaventura",
    "Buenaventura",
    "Buenaventura",
    "Buenaventura",
    "Buenaventura",
  ];

  const topCiudades = (lista) => {
    const ciudades = lista.reduce((acc, ciudad) => {
      if (acc[ciudad]) {
        acc[ciudad] += 1;
      } else {
        acc[ciudad] = 1;
      }
      return acc;
    }, {});

    const ciudadesOrdenadas = Object.entries(ciudades).sort(
      (a, b) => b[1] - a[1]
    );

    return ciudadesOrdenadas.slice(0, 5);
  };

  return (
    <>
      <div className="ciudades">
        <h2 className="ciudades__title">Top 5 ciudades</h2>
        <ul className="ciudades__list">
          {
            // Aquí se debe mostrar el top 5 de ciudades
            topCiudades(listaCiudades).map((ciudad, index) => (
              <li key={index} className="ciudades__list-item">
                {ciudad[0]} - {ciudad[1]}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};
