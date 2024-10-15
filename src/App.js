import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route index element={<Home />} /> {/* index => path="/" */}
				<Route path='/contact' element={<Contact />} />
				<Route path='/login' element={<Login />} />
				<Route path='/admin' element={<PrivateRoute isAuth={isAuth} />}>
					{/* this is the way to private the route of admin page  */}
					<Route path='/admin' element={<Admin />} />
				</Route>
				<Route path='/*' element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
