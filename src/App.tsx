import React from 'react';
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import { UserData } from './types';


function App() {
  const [usersList, setUsersList] = React.useState<Array<UserData>>([]);

  return (
    <div>
      <h2>Home Task #2</h2>
      <AddUserForm onSubmit={newUser => setUsersList(oldUsersList => [...oldUsersList, newUser])} />
      <UserTable usersList={usersList} removeUser={id => setUsersList(usersList.filter(user => user.id !== id))} />
    </div>
  );
}

export default App;
