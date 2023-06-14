import React from "react";

import Display from "./display.jsx";

import image from "/src/img/wolfgang-hasselmann-bR_-gllg7Bs-unsplash_1.png"

const Home = () => {
	

	return (
		<div className="text-center">
			<div className="header" style={{ backgroundImage:`url(${image})`}}>
				<h1 className="pt-5 pb-5 text-success text-white title"><strong>Weather In Your City</strong></h1>
			</div>
			<Display />	
		</div>
	);
};

export default Home;
