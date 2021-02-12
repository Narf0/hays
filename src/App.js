import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import PrivateRoute from "./components/router/privateRoute";
import Player from "./pages/player/player";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Login} />
					<PrivateRoute exact path='/main' component={Main} />
					<Route exact path='/player' component={Player} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
