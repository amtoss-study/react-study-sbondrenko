import { Link } from "react-router-dom";
import { UserData } from "types";

const UserTableItem = ({
    id,
    lastname,
    name,
    surname,
    removeUser,
    getVisitUrl,
}: UserData & {
    removeUser: (id: number) => void;
    getVisitUrl: (id: number) => string;
}) => {
    return (
        <tr key={id}>
            <td> {lastname}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>
                <Link to={getVisitUrl(id)}>Details</Link>
            </td>
            <td>
                <button type="button" onClick={() => removeUser(id)}>
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default UserTableItem;
