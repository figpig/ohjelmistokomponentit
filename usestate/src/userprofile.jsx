import * as React from 'react'
 
function UserProfile() {
    const [user, setUser] = React.useState({ name: "topi", age: 17 });
  
    const increaseAge = () => setUser({ ...user, age: user.age + 1 });
  
    return (
      <div>
        <h2>Käyttäjä</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={increaseAge}>Increase Age</button>
      </div>
    );
}
 
export default UserProfile