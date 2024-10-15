import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
	return (
		<div>
			<Navbar bg='primary' data-bs-theme='dark'>
				<Container>
					<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
						<Nav.Link href='/admin'>Admin</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
