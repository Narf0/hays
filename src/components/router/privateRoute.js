import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import Main from "../../pages/main/main";

const PrivateRoute = (props) => {
	const history = useHistory();
	let isLogged = null;

	if (sessionStorage.getItem("permiso") === "true") {
		return <Route {...props} />;
	} else {
		return <Redirect to='/' />;
	}
};

export default PrivateRoute;
