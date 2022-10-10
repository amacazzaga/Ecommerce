import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLoggedIn from "./views/HomeLoggedIn";
import HomeLoggedOut from "./views/HomeLoggedOut";
import LoginForm from "./views/LoginForm";
import SingInForm from "./views/SingInForm";

function AppRoutes({ user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <HomeLoggedIn /> : <HomeLoggedOut />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign" element={<SingInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
