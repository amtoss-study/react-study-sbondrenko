import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Home from "Pages/Home";
import Users from "Pages/Users";
import { UsersContextProvider } from "UsersContext";

const App = () => {
    return (
        <Router>
            <UsersContextProvider>
                <NavBar />
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/" component={Home} />
                </Switch>
            </UsersContextProvider>
        </Router>
    );
};

export default App;
