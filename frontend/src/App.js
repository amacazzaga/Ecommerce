import { CookiesProvider, useCookies } from "react-cookie";
import AppRoutes from "./AppRoutes";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { AppProvider } from "./AppContext";

function App() {
  const [cookie] = useCookies();
  const [userIsAdmin, setUserIsAdmin] = useState(null);
  const [userId,setUserId]=useState()
  const token = cookie.token;
  // set the user state depending on the token sended from backend//
  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setUserIsAdmin(decoded.isUserAdmin);
      setUserId(decoded.id)
    } else setUserIsAdmin(null);
  }, [token]);
  return (

    <CookiesProvider>
      <AppRoutes userIsAdmin={userIsAdmin} userId={userId} />
    </CookiesProvider>
 
  );
}

export default App;
