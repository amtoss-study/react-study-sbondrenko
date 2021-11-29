import { UserData } from '../types'

const UserTable = ({ usersList, removeUser }: { usersList: UserData[], removeUser: (id: number) => void }) => {

    return (
        <table>
            <caption>Users</caption>
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {usersList.map(
                    (user: UserData) => {
                        return <tr key={user.id}>
                            <td> {user.lastname}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>
                                <button type='button' onClick={() => removeUser(user.id)}>Remove</button>
                            </td>
                        </tr>
                    }
                )}
            </tbody>
        </table>
    )
}

export default UserTable;