import { UsersContext } from "UsersContext";
import { useContext } from "react";

import { UserData } from "types";

const useUsers = () => {
    const { users, updateUsers } = useContext(UsersContext);

    const addUser = (values: UserData) => {
        updateUsers([...users, values]);
    };

    const retrieveUser = (id: number) => users.find((v) => v.id === id);

    const updateUser = (id: number, user: Partial<UserData>) => {
        updateUsers(users.map((v) => (v.id === id ? { ...v, ...user } : v)));
    };

    const deleteUser = (id: number) => {
        updateUsers(users.filter((v) => v.id !== id));
    };

    return { users, addUser, retrieveUser, updateUser, deleteUser };
};

export default useUsers;
