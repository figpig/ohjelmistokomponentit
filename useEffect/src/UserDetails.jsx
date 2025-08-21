import React from 'react';

function UserDetails({ userDetails }) {
  if (!userDetails) return null; 
  

  return (
    <div>
      <h2>User info</h2>
      <p><strong>Name:</strong> {userDetails.name}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>
      <p><strong>City:</strong> {userDetails.address.city}</p>
    </div>
  );
}

export default UserDetails;
