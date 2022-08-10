import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John', age: 18 },
    { id: 2, name: 'Mike', age: 36 },
    { id: 3, name: 'Sally', age: 28 },
    { id: 4, name: 'Bill', age: 53 },
  ]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const incrementAge = (id: number) => {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        }
        return user;
      });
    });
  };

  const selectUser = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setSelectedUser(user);
    }
  };

  return (
    <>
      <h3>Selected User: {selectedUser === null ? 'None' : `${selectedUser.name} is ${selectedUser.age} years old`}</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.25rem', marginBottom: '0.5rem' }}
        >
          {user.name} is {user.age} years old
          <button onClick={() => incrementAge(user.id)}>Increment Age</button>
          <button onClick={() => selectUser(user.id)}>Select</button>
        </div>
      ))}
    </>
  );
}

export default App;
