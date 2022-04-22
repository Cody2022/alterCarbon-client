import React,{useState}from "react";
import { Outlet, Link } from "react-router-dom";
import background from "../../img/background.jpg";
import Footer from "../Footer/Footer";

const Home = () => {
  const [showFooter, setShowFooter]=useState(true)
  
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          height: 700,
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
       {showFooter && <Footer setShowFooter={setShowFooter} />}
    </div>
  );
};

export default Home;
