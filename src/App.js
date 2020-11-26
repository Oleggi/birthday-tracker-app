import { Redirect, Route, Switch } from "react-router-dom";
import { UsersState } from "./context/UsersState";
import { Employees } from "./pages/Employees";

function App() {
  return (
    <div className="container">
      <UsersState>
        <Switch>
          <Route path="/employees" exact component={Employees} />
        </Switch>
        <Route path="/">
          <Redirect to="/employees" />
        </Route>
      </UsersState>
    </div>
  );
}

export default App;
