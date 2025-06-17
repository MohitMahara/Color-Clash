import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState({
    user: null,
    token: null,
  });

  // Default header for all requests made via axios.

  axios.defaults.headers.common['Authorization'] =  userInfo?.token

  useEffect(() => {
    const data = localStorage.getItem("colorclash");

    if (data) {
      const parseData = JSON.parse(data);

      setUserInfo({
        ...userInfo,
        user: parseData.user,
        token: parseData.token,
      });
    }

  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

// custome hooks

export const UseAuth = () => useContext(AuthContext);