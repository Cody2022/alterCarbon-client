
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
      <Link to="/">
          <img src="./img/Foot.jpg" height={40}/>
        </Link>
        <Link component={RouterLink} color="white" underline="none" to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link component={RouterLink} color="white" underline="none" to="/login">
          <Button color="inherit">Login Here</Button>
        </Link>
        <Link component={RouterLink} color="white" underline="none" to="/signup">
          <Button color="inherit">Sighup Here</Button>
        </Link>
        <Link component={RouterLink} color="white" underline="none" to="/map">
          <Button color="inherit">Map</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}