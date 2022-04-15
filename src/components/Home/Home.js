import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <ul style={{}}>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
           <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Home;
