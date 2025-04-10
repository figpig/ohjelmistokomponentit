import React from 'react';

function UserDetails({ userDetails }) {
  if (!userDetails) return null; // Ei näytetä mitään, jos käyttäjä tietoja ei ole
  

  return (
    <div>
      <h2>Käyttäjän tiedot</h2>
      <p><strong>Nimi:</strong> {userDetails.name}</p>
      <p><strong>Sähköposti:</strong> {userDetails.email}</p>
      <p><strong>Kaupunki:</strong> {userDetails.address.city}</p>
    </div>
  );
}

export default UserDetails;
