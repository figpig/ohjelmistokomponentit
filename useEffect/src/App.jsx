import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails.jsx';
import UserPosts from './UserPosts.jsx';

function App() {
  const [userId, setUserId] = useState(1); 
  const [userDetails, setUserDetails] = useState(null); 
  const [userPosts, setUserPosts] = useState([]); 
  const [error, setError] = useState(null); 

  // Hakee käyttäjän tiedot ja postaukset
  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);

        // Hae käyttäjän tiedot
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) throw new Error(`HTTP-virhe käyttäjän tiedoissa: ${userResponse.status}`);
        const userData = await userResponse.json();
        setUserDetails(userData);

        // Hae käyttäjän postaukset
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!postsResponse.ok) throw new Error(`HTTP-virhe postauksissa: ${postsResponse.status}`);
        const postsData = await postsResponse.json();
        setUserPosts(postsData);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, [userId]); // Suoritetaan aina, kun userId muuttuu

  return (
    <div>
      <h1>Käyttäjän tiedot ja postaukset</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Näytetään virhe, jos on */}

      <div>
        <button onClick={() => setUserId((prev) => Math.max(prev - 1, 1))}>Edellinen käyttäjä</button>
        <button onClick={() => setUserId((prev) => prev + 1)}>Seuraava käyttäjä</button>
      </div>

      <UserDetails userDetails={userDetails} />
      <UserPosts userPosts={userPosts} />
    </div>
  );
}

export default App;