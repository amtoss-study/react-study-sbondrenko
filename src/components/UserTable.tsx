import { UserData } from "types";
import UserTableItem from "./UserTableItem";

const UserTable = ({
    usersList,
    removeUser,
    getVisitUrl,
}: {
    usersList: UserData[];
    removeUser: (id: number) => void;
    getVisitUrl: (id: number) => string;
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
                            getVisitUrl={getVisitUrl}
                            {...user}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

export default UserTable;
