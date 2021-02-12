import React, { useState, useEffect } from "react";
import MD5 from "crypto-js/md5";

const UseLogin = (usuario) => {
	const password = MD5(usuario.password);

	const updateRequest = new FormData();
	updateRequest.append("user", usuario.email);
	updateRequest.append("pass", password);
	updateRequest.append("device", "Web");

	const requestOptions = {
		method: "POST",
		body: updateRequest,
	};
	const result = fetch("https://dev.perseo.tv/ws/Login.php", requestOptions).then((response) => response.json());

	return result;
};

export default UseLogin;
