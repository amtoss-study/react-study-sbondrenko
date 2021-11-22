/* Hometask1 */

const MyTable = ({ usersList }) => {
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
                {usersList.map(
                    (user, index) => {
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


const AddUserForm = ({ onSubmit }) => {
    const [surnameValue, setSurnameValue] = React.useState('');
    const [nameValue, setNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');

    return (
        <div>
            <form
                autoComplete="off"
                onSubmit={event => {
                    event.preventDefault();
                    onSubmit({
                        name: nameValue,
                        surname: surnameValue,
                        lastname: lastNameValue
                    })
                }}
            >
                <h3>Add User</h3>
                <p>Last Name</p>
                <input name="lastName" onChange={event => setLastNameValue(event.target.value) } />
                <p>Name</p>
                <input name="name" onChange={event => setNameValue(event.target.value) } />
                <p>Second Name</p>
                <input name="surnameValue" onChange={event => setSurnameValue(event.target.value) } />
                <p />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

const App = () => {
    const [usersList, SetUsersList] = React.useState([])    
    return (
        <div>
            <AddUserForm onSubmit={newUser => SetUsersList(oldUsersList => [...oldUsersList, newUser] )} />
            <MyTable usersList = {usersList} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
