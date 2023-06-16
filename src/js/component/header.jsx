import React from "react";
import image from "/src/img/wolfgang-hasselmann-bR_-gllg7Bs-unsplash_1.png"

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage:`url(${image})`}}>
            <h1 className="pt-5 pb-5 text-success text-white title"><strong>Weather In Your City</strong></h1>
        </div>
    )
}

export default Header;