import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const NavbarSearch = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
				<Nav className='mr-auto'></Nav>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-info'>Search</Button>
				</Form>
			</Navbar>
		</>
	);
};

export default NavbarSearch;
