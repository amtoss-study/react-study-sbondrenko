import { UserData } from "types";
import UserTableItem from "./UserTableItem";

const UserTable = ({
    usersList,
    removeUser,
    getUserUrl,
}: {
    usersList: UserData[];
    removeUser: (id: number) => void;
    getUserUrl: (id: number) => string;
}) => {
    return (
        <table>
            <caption>Users</caption>
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {usersList.map((user: UserData) => {
                    return (
                        <UserTableItem
                            key={user.id}
                            removeUser={removeUser}
                            getUserUrl={getUserUrl}
                            {...user}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

export default UserTable;
