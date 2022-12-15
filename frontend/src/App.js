import { CookiesProvider, useCookies } from "react-cookie";
import AppRoutes from "./AppRoutes";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

function App() {
  const [cookie] = useCookies();
  const [user, setUser] = useState(null);
  const [userId,setUserId]=useState()
  const token = cookie.token;
  // set the user state depending on the token send backend//
  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded.isUserAdmin);
      setUserId(decoded.id)
    } else setUser(null);
  }, [token]);
  return (
    <CookiesProvider>
      <AppRoutes user={user} userId={userId} />
    </CookiesProvider>
  );
}

export default App;
