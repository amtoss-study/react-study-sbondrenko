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
            updateUsers(prevUsers => [...prevUsers, data]);
          });
        },
        [updateUsers]
      );

      const updateUser = useCallback(
        (id: number, values: Partial<UserData>) => {
          return api.patch(`users/${id}`, values).then((data: UserData) => {
            updateUsers(prevUsers => prevUsers.map((u) => (u.id === id ? data : u)));
          });
        },
        [updateUsers]
      );

    const deleteUser = useCallback(
        (id: number) => {
            api.del(`users/${id}`).then(() => {
                updateUsers(prevUsers => prevUsers.filter((u) => u.id !== id));
            });
        },
        [updateUsers]
    );

    const retrieveUser = useCallback(
        (id: number) => {
            return api.get(`users/${id}`).then((data: UserData) => {
                updateUsers(prevUsers => {
                    const index = prevUsers.findIndex((u) => u.id === id);
                    if (index > -1) {
                      // replace item at index
                      return [
                        ...prevUsers.slice(0, index),
                        data,
                        ...prevUsers.slice(index + 1),
                      ];
                    }
                    return [...prevUsers, data];
                });
            });
        },
        [updateUsers]
    )

    return { users, addUser, retrieveUser, updateUser, deleteUser, retrieveUsers, getUser };
};

export default useUsers;
