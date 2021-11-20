let usersList = [];

const Greeting = ({ name }) => (
    <p>Hello, {name}!</p>  
);

const MyTable = ({ MyName, MySurname, MyLastname}) => {
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
       (value, index) => {
           return <tr key = {index}>
               <td>
               {value.MyLastname}
               </td>
               <td>
               {value.MyName}
               </td>               
               <td>
               {value.MySurname}
               </td>
           </tr>
       }
   )}
   </tbody>
  </table>    
)
}


const NameForm = ({ onSubmit }) => {
    const [surnameValue, setSurnameValue] = React.useState('');
    const [nameValue, setNameValue] = React.useState('');
    const [lastNameValue, setsLastNameValue] = React.useState('');
    return (
        <dir>
        <MyTable >

        </MyTable>
<form
    autoComplete="off"
    onSubmit={event => {
        event.preventDefault();
        usersList.push({
            MyName: nameValue, 
            MySurname: surnameValue, 
            MyLastname: lastNameValue
        });
        onSubmit({ name: nameValue })
    }}
>


    <h3>Add User</h3>
    <p>Last Name</p>
    <input
        name="lastName"
        value={lastNameValue}
        onChange={event => {
            setsLastNameValue(event.target.value)
        }}
    />    
    <br/>
    <p>Name</p>
    <input
        name="name"
        value={nameValue}
        onChange={event => {
            setNameValue(event.target.value)
        }}
    />
    <br/>
    <p>Second Name</p>
    <input
        name="surnameValue"
        value={surnameValue}
        onChange={event => {
            setSurnameValue(event.target.value)
        }}
    /> 
    <br/>   
    <button type="submit">Submit</button>
</form>

        </dir>
    );
}

const App = () => {
    const [name, setName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    return (
        <div>
            <NameForm onSubmit={values => setName(values.name)} />
            
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
