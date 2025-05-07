import './tapahtuma.css';

function Tapahtuma({ tapahtuma, poistaTapahtuma }) {
  const { id, nimi, paivamaara, kategoria } = tapahtuma;

  return (
    <div className={`tapahtuma ${kategoria.toLowerCase()}`}>
      <h3>{nimi}</h3>
      <p>{paivamaara}</p>
      <p>Kategoria: {kategoria}</p>
      <button onClick={() => poistaTapahtuma(id)}>Poista</button>
    </div>
  );
}

export default Tapahtuma;
