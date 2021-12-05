import { UserData } from "types";

const UserDetails = ({ id, lastname, name, surname }: UserData) => {
    return (
        <div>
            <h1>User details</h1>
            <p>User Id: {id}</p>
            <p>Lastname: {lastname}</p>
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
        </div>
    );
};

export default UserDetails;
