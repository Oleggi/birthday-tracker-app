import { Route, Switch } from "react-router-dom";
import { UsersState } from "./context/UsersState";
import { Employees } from "./pages/Employees";

function App() {
  return (
    <div className="container">
      <UsersState>
        <Switch>
        <Route path="/" exact component={Employees} />
        <Route path="/employees" exact component={Employees} />
        </Switch>
      </UsersState>
    </div>
  );
}

export default App;
