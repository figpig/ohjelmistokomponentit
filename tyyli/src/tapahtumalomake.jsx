import { useState } from 'react';
import './tapahtumalomake.css';

function TapahtumaLomake({ lisaaTapahtuma }) {
  const [nimi, setNimi] = useState('');
  const [paivamaara, setPaivamaara] = useState('');
  const [kategoria, setKategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nimi && paivamaara && kategoria) {
      lisaaTapahtuma({
        id: Date.now(),
        nimi,
        paivamaara,
        kategoria,
      });
      setNimi('');
      setPaivamaara('');
      setKategoria('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tapahtumalomake">
      <input
        type="text"
        placeholder="Tapahtuman nimi"
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
      />
      <input
        type="date"
        value={paivamaara}
        onChange={(e) => setPaivamaara(e.target.value)}
      />
      <select
        value={kategoria}
        onChange={(e) => setKategoria(e.target.value)}
      >
        <option value="">Valitse kategoria</option>
        <option value="Urheilu">Urheilu</option>
        <option value="Kulttuuri">Kulttuuri</option>
        <option value="Muu">Muu</option>
      </select>
      <button type="submit">Lisää</button>
    </form>
  );
}

export default TapahtumaLomake;
