import { useRouteMatch } from "react-router-dom";

import { UserData } from "types";
import UserTable from "components/UserTable";
import AddUserForm, { UserDataValues } from "components/AddUserForm";
import useUsers from "hooks/useUsers";

const UserList = () => {
    const { users, addUser, deleteUser } = useUsers();
    const match = useRouteMatch();

    const createUser = (user: UserDataValues): UserData => {
        const timestamp = Date.now();
        return {
            id: timestamp,
            lastname: user.lastname,
            name: user.name,
            surname: user.surname,
        };
    };

    return (
        <div>
            <AddUserForm onSubmit={(newUser) => addUser(createUser(newUser))} />
            <UserTable
                usersList={users}
                removeUser={(id) => deleteUser(id)}
                getVisitUrl={(id) => `${match.url}/${id}`}
            />
        </div>
    );
};

export default UserList;
