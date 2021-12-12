import React from "react";
import { useParams } from "react-router-dom";

import UserDetails from "components/UserDetails";
import AddUserForm from "components/AddUserForm";
import useUsers from "hooks/useUsers";
import Spinner from "components/Spinner";

const UserDetailsPage = () => {
    const { getUser, retrieveUser, updateUser } = useUsers();
    const { userId } = useParams<{ userId: string }>();
    const [editing, setEditing] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<null | string>(null);    

    const userIdNum = parseInt(userId, 10);

    React.useEffect(() => {
        setLoading(true);
        setError(null)
        retrieveUser(userIdNum)
            .catch((err) => setError(`Error while loading visit: ${err}`))
            .finally(() => setLoading(false));
    }, [retrieveUser, userIdNum]);
    
      const user = getUser(userIdNum);    

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
        <>
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
            {loading && <Spinner />}
            {error && <div style={{ color: "red" }}>{error}</div>}
        </>
    );
};

export default UserDetailsPage;
