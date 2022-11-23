import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminBoardHome from "./views/AdminBoardHome";
import AdminBoardUsers from "./views/AdminBoardUsers";
import EditProduct from "./views/EditProduct";
import EditUser from "./views/EditUser";
import EditImage from "./views/EditImage";
import HomeLoggedIn from "./views/HomeLoggedIn";
import HomeLoggedOut from "./views/HomeLoggedOut";
import LoginForm from "./views/LoginForm";
import SingUpForm from "./views/SingUpForm";
import UserBoard from "./views/UserBoard";
import UserPurchase from "./views/UserPurchase";


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
          element={user ? <AdminBoardHome /> : <UserBoard />}
        />
        <Route
          path={`/myaccount/editproduct/:id`}
          element={user ? <EditProduct /> : <h1>not admin</h1>}
        />
         <Route
          path={`/myaccount/editimage/:id`}
          element={user ? <EditImage/> : <h1>not admin</h1>}
        />
        <Route
          path={`/myaccount/users`}
          element={user ? <AdminBoardUsers/> : <h1>not admin</h1>}
        />
          <Route
          path={`/myaccount/users/sales/:id`}
          element={user ? <UserPurchase/> : <h1>not admin</h1>}
        />
          <Route
          path={`/myaccount/users/editusers/:id`}
          element={user ? <EditUser/> : <h1>not admin</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
