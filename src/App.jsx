import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder='Enter Name' />
        <br />
        <input type="email" name="email" id="" placeholder='Enter Email' />
        <br />
        <button>Submit</button>
      </form>

      <h1>Total User : {users.length}</h1>

      {
        users.map(user => <p key={user.id}>Name: {user.name}  Email: {user.email}</p>)
      }
    </div>
  );
};

export default App;