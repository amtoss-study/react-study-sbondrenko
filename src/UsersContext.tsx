import { createContext, useState, FunctionComponent } from "react";
import { UserData } from "types";

type UsersContextType = {
    users: UserData[];
    updateUsers: (users: UserData[] | ((prevUsers: UserData[]) => UserData[])) => void;
};

export const UsersContext = createContext<UsersContextType>({
    users: [],
    updateUsers: () => {},
});

export const UsersContextProvider: FunctionComponent = ({ children }) => {
    const [users, updateUsers] = useState<UserData[]>([]);
    return (
        <UsersContext.Provider value={{ users, updateUsers }}>
            {children}
        </UsersContext.Provider>
    );
};
