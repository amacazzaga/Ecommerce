import { CookiesProvider, useCookies } from "react-cookie";
import AppRoutes from "./AppRoutes";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

function App() {
  const [cookie] = useCookies();
  const [user, setUser] = useState(null);
  const token = cookie.token;
  useEffect(() => {
    console.log("cookie", token);
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded.isUserAdmin);
    } else setUser(null);
  }, [token]);
  return (
    <CookiesProvider>
      <AppRoutes user={user} />
    </CookiesProvider>
  );
}

export default App;
