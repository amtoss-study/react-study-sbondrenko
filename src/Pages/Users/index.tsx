import { Switch, Route, useRouteMatch } from "react-router-dom";
import UserDetails from "./UserDetailsPage";
import UserList from "./UserList";

const Users = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/:userId`} component={UserDetails} />
            <Route path={match.path} component={UserList} />
        </Switch>
    );
};

export default Users;
