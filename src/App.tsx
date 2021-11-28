import React from 'react';
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import { UserData } from './types';


function App() {
  const [usersList, SetUsersList] = React.useState<Array<UserData> >([]);
  const getUser = (user : UserData) : UserData => {
    const timestamp = Date.now();
    return {
      id: timestamp,
      lastname: user.lastname,
      name: user.name,
      surname: user.surname
    }
  }
  return (
      <div>
          <AddUserForm onSubmit={newUser => SetUsersList(oldUsersList => [...oldUsersList, newUser] )} />
          <UserTable usersList = {usersList} />
      </div>
  );
}

export default App;
