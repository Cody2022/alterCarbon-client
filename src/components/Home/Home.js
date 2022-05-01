import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import background from "../../img/background.jpg";
import Footer from "../Footer/Footer";
import {Grid, Typography} from "@mui/material"

const Home = () => {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <Grid conatainer>
      <Grid xs={12} sm={6} md={3} item>
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          height: 700,
          width: 1510,
        }}
      >
        <Outlet />
      </div>
      {showFooter && <Footer setShowFooter={setShowFooter} />}
    </div>
        
      </Grid>
</Grid>
  );
};
export default Home;
