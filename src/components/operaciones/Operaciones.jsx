import React from "react";
import { useState, useEffect } from "react";

import "../../assets/scss/components/Operaciones/_operaciones.scss";

export const Operaciones = () => {
  const [num1, setNum1] = useState("1");
  const [num2, setNum2] = useState("1");
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState(0);

  return (
    <>
      <section>
        <h2>Operaciones</h2>
        <div className="Operaciones__content">
          <div className="Operaciones__content--input">
            <label htmlFor="num1">1</label>
            <input
              type="number"
              name="num1"
              id="num1"
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>
          <div className="Operaciones__content--input">
            <label htmlFor="num2">2</label>
            <input
              type="number"
              name="num2"
              id="num2"
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
          <div className="Operaciones__content--input">
            <label htmlFor="operacion">Operacion</label>
            <select
              name="operacion"
              id="operacion"
              onChange={(e) => setOperacion(e.target.value)}
            >
              <option value="suma">Suma</option>
              <option value="resta">Resta</option>
              <option value="multiplicacion">Multiplicacion</option>
              <option value="division">Division</option>
            </select>
          </div>

          <button
            className="Operaciones__content--button"
            onClick={() => {
              calcular();
            }}
          >
            Calcular
          </button>

          <div className="Operaciones__content__result">
            <p>Resultado: {resultado}</p>
          </div>
        </div>
      </section>
    </>
  );

  function calcular() {
    let resultado = 0;

    if (num1 === "") {
      setNum1("1");
    }

    if (num2 === "") {
      setNum2("1");
    }

    if (num1 === "" && num2 === "") {
      alert("No se puede calcular con valores vacios");
      return;
    }

    if ((operacion === "division" && num2 === "0") || num2 === "") {
      alert("No se puede dividir entre 0");
      setResultado(0);
      return;
    }

    switch (operacion) {
      case "suma":
        resultado = parseInt(num1) + parseInt(num2);
        break;
      case "resta":
        resultado = parseInt(num1) - parseInt(num2);
        break;
      case "multiplicacion":
        resultado = parseInt(num1) * parseInt(num2);
        break;
      case "division":
        resultado = parseInt(num1) / parseInt(num2);
        break;
      default:
        break;
    }

    setResultado(resultado);
  }
};
