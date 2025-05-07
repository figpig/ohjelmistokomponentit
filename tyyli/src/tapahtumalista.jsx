import './tapahtumalista.css';
import Tapahtuma from './tapahtuma.jsx';

function TapahtumaLista({ tapahtumat, poistaTapahtuma }) {
  return (
    <div className="tapahtumalista">
      {tapahtumat.map((tapahtuma) => (
        <Tapahtuma
          key={tapahtuma.id}
          tapahtuma={tapahtuma}
          poistaTapahtuma={poistaTapahtuma}
        />
      ))}
    </div>
  );
}

export default TapahtumaLista;
