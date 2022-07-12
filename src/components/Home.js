import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home-container">
          <Link to="/vending">Enter Shop</Link>
        </div>
    )
}

export default Home;