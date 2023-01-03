import "./assets/scss/components/App/_app.scss";
import { Ciudades } from "./components/ciudades/Ciudades";
import { Operaciones } from "./components/operaciones/Operaciones";
import { Unificacion } from "./components/unificacion/Unificacion";

function App() {
  return (
    <div className="ContainerMain">
      <h1 className="ContainerMain__title">Ejercicio Practico</h1>
      <Operaciones />
      <Ciudades />
      <Unificacion />
    </div>
  );
}

export default App;
