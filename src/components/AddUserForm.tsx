import React from 'react';

type AddUserFormValue = {
    id: number;
    lastname: string;
    name: string;
    surname: string;
}

const AddUserForm = ({ onSubmit } : {
    onSubmit: ( value: AddUserFormValue) => void
} ) => {
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
                        id: 0,
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

export default AddUserForm;
