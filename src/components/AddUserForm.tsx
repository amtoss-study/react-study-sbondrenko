import React from "react";

export type UserDataValues = {
    lastname: string;
    name: string;
    surname: string;
};

const AddUserForm = ({
    onSubmit,
    initialValues = { lastname: "", name: "", surname: "" },
}: {
    onSubmit: (value: UserDataValues) => void;
    initialValues?: UserDataValues;
}) => {
    const [surnameValue, setSurnameValue] = React.useState(initialValues.surname);
    const [nameValue, setNameValue] = React.useState(initialValues.name);
    const [lastNameValue, setLastNameValue] = React.useState(initialValues.lastname);

    return (
        <div>
            <form
                autoComplete="off"
                onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit({
                        name: nameValue,
                        surname: surnameValue,
                        lastname: lastNameValue,
                    });
                }}
            >
                <h3>Add User</h3>
                <p>Last Name</p>
                <input
                    name="lastName"
                    value={lastNameValue}
                    onChange={(event) => setLastNameValue(event.target.value)}
                />
                <p>Name</p>
                <input
                    name="name"
                    value={nameValue}
                    onChange={(event) => setNameValue(event.target.value)}
                />
                <p>Second Name</p>
                <input
                    name="surnameValue"
                    value={surnameValue}
                    onChange={(event) => setSurnameValue(event.target.value)}
                />
                <p />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserForm;
