/*import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [cookie] = useCookies();
  const [user, setUser] = useState(null);
  const token = cookie.token;
  useEffect(() => {
    console.log("cookie", token);
    if (token) {
      const decoded = jwt_decode(token);
      console.log(decoded);
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};*/
