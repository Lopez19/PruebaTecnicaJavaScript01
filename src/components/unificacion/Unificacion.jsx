import React from "react";
import "../../assets/scss/components/Unificacion/_unificacion.scss";

export const Unificacion = () => {
  const arrayDeNumeros = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  const numerosUnificados = arrayDeNumeros.flat();

  return (
    <>
      <div className="unificacion">
        <h2 className="unificacion__title">Unificación de datos</h2>
        <div className="unificacion__original">
          <h3 className="unificacion__original-title">Datos originales</h3>
          <p className="unificacion__original-text">
            {JSON.stringify(arrayDeNumeros)}
          </p>
        </div>

        <div className="unificacion__unificado">
          <h3 className="unificacion__unificado-title">Datos unificados</h3>
          <p className="unificacion__unificado-text">
            {JSON.stringify(numerosUnificados)}
          </p>
        </div>
      </div>
    </>
  );
};
