import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MD5 from "crypto-js/md5";
import { useHistory } from "react-router-dom";
import UseLogin from "../../components/useLogin/useLogin";
import PrivateRoute from "../../components/router/privateRoute";

const Login = () => {
	const history = useHistory();
	// State para iniciar sesión
	const [usuario, setUsuario] = useState({
		email: "",
		password: "",
	});

	const [errorForm, setErrorForm] = useState("");

	const onChange = (e) => {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	//Cuando el usuario inicia sesión
	const onSubmit = async (e) => {
		e.preventDefault();
		//validacion de formularios
		if (usuario.email === "" || usuario.password === "") {
			setErrorForm("Por favor introduzca usuario y contraseña");
		} else {
			const devuelve = await UseLogin(usuario);
			if (devuelve.authorized === true) {
				sessionStorage.setItem("permiso", "true");
				sessionStorage.setItem("token", devuelve.token);
				history.push("/main");
			} else {
				setErrorForm("Contraseña o usuario incorrecto");
			}
		}
	};

	return (
		<Container>
			<Row style={{ paddingTop: "50px" }}>
				<Col md={{ span: 6, offset: 3 }}>
					<h2>Login</h2>
					<Form onSubmit={onSubmit}>
						<Form.Group>
							<Form.Label column sm={2}>
								Email
							</Form.Label>

							<Form.Control
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								value={usuario.email}
								onChange={onChange}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label column sm={2}>
								Password
							</Form.Label>
							<Form.Control
								type='password'
								id='password'
								name='password'
								value={usuario.password}
								placeholder='Password'
								onChange={onChange}
							/>
						</Form.Group>

						<Form.Group>
							<Button type='submit'>Sign in</Button>
							{errorForm ? <span>{errorForm}</span> : null}
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
