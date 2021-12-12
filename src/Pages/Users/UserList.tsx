import { useRouteMatch } from "react-router-dom";
import {useState, useEffect} from 'react'

import { UserData } from "types";
import UserTable from "components/UserTable";
import AddUserForm, { UserDataValues } from "components/AddUserForm";
import useUsers from "hooks/useUsers";
import Spinner from "components/Spinner";

const UserList = () => {
    const { users, retrieveUsers, addUser, deleteUser } = useUsers();
    const match = useRouteMatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);        
        retrieveUsers().catch((err) => setError(`Error while loading visits: ${err}`))
        .finally(() => setLoading(false));
      }, [retrieveUsers]);

    const createUser = (user: UserDataValues): Omit<UserData, 'id'> => {
        console.log(user);
        return {
            timestamp: Date.now(),
            lastname: user.lastname,
            name: user.name,
            surname: user.surname,
        };
    };

    return (
        <div>
            <AddUserForm onSubmit={(newUser) => {
                setLoading(true);
                setError(null);
                addUser(createUser(newUser))
            }
            } />
            <UserTable
                usersList={users}
                removeUser={(id) => deleteUser(id)}
                getUserUrl={(id) => `${match.url}/${id}`}
            />
            {loading && <Spinner />}
            {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
    );
};

export default UserList;
