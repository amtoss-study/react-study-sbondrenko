import { UsersContext } from "UsersContext";
import { useContext, useCallback } from "react";

import { UserData } from "types";
import api from "api";

const useUsers = () => {
    const { users, updateUsers } = useContext(UsersContext);

    const getUser = (id: number) => users.find((v) => v.id === id);

    const retrieveUsers = useCallback(() => {
        updateUsers([]);
        return api.get("users").then((data: UserData[]) => {
            updateUsers(data);
        });
      }, [updateUsers]);
    
      const addUser = useCallback(
        (values: Omit<UserData, "id">) => {
          return api.post("users", values).then((data: UserData) => {
            updateUsers([...users, data]);
          });
        },
        [updateUsers]
      );

      const updateUser = useCallback(
        (id: number, values: Partial<UserData>) => {
          return api.patch(`users/${id}`, values).then((data: UserData) => {
            updateUsers(users.map((v) => (v.id === id ? data : v)));
          });
        },
        [updateUsers]
      );

    const deleteUser = useCallback(
        (id: number) => {
            api.del(`users/${id}`).then(() => {
                updateUsers(users.filter((v) => v.id !== id));
            });
        },
        [updateUsers]
    );

    const retrieveUser = useCallback(
        (id: number) => {
            return api.get(`users/${id}`).then((data: UserData) => {
                updateUsers([...users, data]);
            });
        },
        [updateUsers]
    )

    return { users, addUser, retrieveUser, updateUser, deleteUser, retrieveUsers, getUser };
};

export default useUsers;
