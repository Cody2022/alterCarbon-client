import React from "react";
import { Outlet, Link } from "react-router-dom";
import background from "../../img/background.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: 750,
        width: 1600,
      }}
    >
      <div className="home">
        <ul>
          <li>
            <Link to="/login" style={{ color: "black" }}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" style={{ color: "black" }}>
              Signup
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
