import { useState,useEffect } from 'react';

export default function useToken() {
  const [token, setToken] = useState({});
  useEffect(()=>{
      const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const tokenObject = JSON.parse(tokenString);
        if (tokenObject) {setToken(tokenObject)};
    };
        getToken();
   },[])
  
   const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };
    return {
        setToken: saveToken,
        token
    }
}