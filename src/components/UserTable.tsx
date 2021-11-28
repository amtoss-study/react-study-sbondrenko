import React from 'react';
import {UserData} from '../types'

const UserTable = ( props : {usersList : UserData[] } ) => {
    return (
        <table>
            <caption>Users</caption>
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
            </thead>
            <tbody>
                {props.usersList.map(
                    (user : UserData, index : number)  => {
                        return <tr key={index}>
                            <td> {user.lastname}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                        </tr>
                    }
                )}
            </tbody>
        </table>
    )
}

export default UserTable;