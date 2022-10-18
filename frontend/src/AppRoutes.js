import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminBoard from "./views/AdminBoard";
import HomeLoggedIn from "./views/HomeLoggedIn";
import HomeLoggedOut from "./views/HomeLoggedOut";
import LoginForm from "./views/LoginForm";
import SingUpForm from "./views/SingUpForm";
import UserBoard from "./views/UserBoard";

function AppRoutes({ user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user !== null ? <HomeLoggedIn user={user} /> : <HomeLoggedOut />
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SingUpForm />} />
        <Route
          path="/myaccount"
          element={user ? <AdminBoard /> : <UserBoard />}
        />
        <Route path="myaccount/products" element={<h1>products.map</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
