import React from "react";

import Display from "./display.jsx";

const Home = () => {
	

	return (
		<div className="text-center">
			<h1 className="pt-5 pb-5 text-success">Weather In Your City</h1>
			<Display />	
		</div>
	);
};

export default Home;
