import React, { useEffect } from "react";
import Signup from "../Signup/Signup";

export default function SignupPage() {
  useEffect(() => {
    document.title = "Signup";
  }, []);
  console.log("Signup");
  return <Signup />;
}
