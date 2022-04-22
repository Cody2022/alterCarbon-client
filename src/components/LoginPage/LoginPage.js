import React, {useEffect} from 'react';
import useToken from '../App/useToken';
import Calculation from '../Calculation/Calculation';
import Login from '../Login/Login';


export default function LoginPage() {
  const {token, setToken } = useToken();
  useEffect(()=>{document.title="Login"},[])

 //**Check login information */
 console.log("LoginPage token is:",token)
  if(token.status!=="successful") {
    return <Login setToken={setToken} />
  }
//**Check login information */
  
  return(
    <Calculation />
  )
};

