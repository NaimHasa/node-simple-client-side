import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);



    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUsers = [...users, data];
        setUser(newUsers);



      })
      .catch(err => console.error(err))

    event.target.reset();

  }



  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='Enter Name' />
        <br />
        <input type="email" name="email" id="" placeholder='Enter Email' />
        <br />
        <button>Submit</button>
      </form>

      <h1>Total User : {users.length}</h1>

      {
        users.map(user => <p key={user._id}>Name: {user.name}  Email: {user.email}</p>)
      }
    </div>
  );
};

export default App;