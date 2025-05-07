import { useState } from 'react';
import './App.css';
import TapahtumaLomake from './tapahtumalomake.jsx';
import TapahtumaLista from './tapahtumalista.jsx';

function App() {
  const [tapahtumat, setTapahtumat] = useState([]);

  const lisaaTapahtuma = (uusiTapahtuma) => {
    setTapahtumat([...tapahtumat, uusiTapahtuma]);
  };

  const poistaTapahtuma = (id) => {
    setTapahtumat(tapahtumat.filter((tapahtuma) => tapahtuma.id !== id));
  };

  return (
    <div>
      <h1>Tapahtumasovellus</h1>
      <TapahtumaLomake lisaaTapahtuma={lisaaTapahtuma} />
      <TapahtumaLista tapahtumat={tapahtumat} poistaTapahtuma={poistaTapahtuma} />
    </div>
  );
}

export default App;
