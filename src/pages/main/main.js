import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarSearch from "../../components/navbarSearch/navbarSearch";
import { Link } from "react-router-dom";

const Main = () => {
	const [datos, setDatos] = useState(null);
	const [listItems, setListItems] = useState(null);

	useEffect(() => {
		obtenerDatos().then((res) => {
			setDatos(res);
			console.log(res);
			mostrarContenido(res.contents);
		});
	}, []);

	const updateRequest = new FormData();
	updateRequest.append("token", sessionStorage.getItem("token"));
	updateRequest.append("device", "Web");

	const obtenerDatos = async () => {
		const requestOptions = {
			method: "POST",
			body: updateRequest,
		};
		const result = await fetch("https://dev.perseo.tv/ws/GetView.php", requestOptions).then((response) => response.json());

		return result;
	};

	const mostrarContenido = (res) => {
		setListItems(
			res.map((resultado) => {
				return resultado;
			})
		);
	};

	return (
		<>
			<NavbarSearch />
			<Container>
				<Row style={{ paddingTop: "50px" }}>
					{console.log(listItems)}
					{listItems &&
						listItems.map((ele, key) => {
							return (
								<>
									<Col xs={6} key={key}>
										Cover: {ele.cover}
										<br />
										Duracion: {ele.duration}
										<br />
										ID: {ele.id}
										<br />
										Seccion: {ele.section}
										<br />
										Titulo: {ele.title}
										<br />
										URL: {ele.url}
										<br />
										<br />
										<br />
									</Col>
								</>
							);
						})}
				</Row>
			</Container>
		</>
	);
};

export default Main;
