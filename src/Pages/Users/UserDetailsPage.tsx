import React from "react";
import { useParams } from "react-router-dom";

import UserDetails from "components/UserDetails";
import AddUserForm from "components/AddUserForm";
import useUsers from "hooks/useUsers";

const UserDetailsPage = () => {
    const { retrieveUser, updateUser } = useUsers();
    const { userId } = useParams<{ userId: string }>();
    const [editing, setEditing] = React.useState(false);

    const user = retrieveUser(parseInt(userId, 10));
    if (user === undefined) {
        return <h3>User does not exist</h3>;
    }

    if (!editing) {
        return (
            <div>
                <UserDetails {...user} />
                <button type="button" onClick={() => setEditing(true)}>
                    Edit
                </button>
            </div>
        );
    }

    return (
        <AddUserForm
            onSubmit={(values) => {
                updateUser(user.id, values);
                setEditing(false);
            }}
            initialValues={{
                ...user,
                lastname: user.lastname,
                name: user.name,
                surname: user.surname,
            }}
        />
    );
};

export default UserDetailsPage;
