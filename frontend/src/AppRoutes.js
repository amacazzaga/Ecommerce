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
import ShoppingCartLogOut from "./views/ShoppingCartLogOut";
import InspectProduct from "./views/InspectProduct";

function AppRoutes({ userIsAdmin, userId }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={userId ? <HomeLoggedIn /> : <HomeLoggedOut />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SingUpForm />} />
        <Route
          path="/myaccount"
          element={userIsAdmin ? <AdminBoardHome /> : <UserBoard />}
        />
        <Route
          path={`/myaccount/editproduct/:id`}
          element={userIsAdmin ? <EditProduct /> : <h1>not admin</h1>}
        />
        <Route
          path={`/myaccount/editimage/:id`}
          element={userIsAdmin ? <EditImage /> : <h1>not admin</h1>}
        />
        <Route
          path={`/myaccount/users`}
          element={userIsAdmin ? <AdminBoardUsers /> : <h1>not admin</h1>}
        />
        <Route
          path={`/myaccount/users/editusers/:id`}
          element={userIsAdmin ? <EditUser /> : <h1>not admin</h1>}
        />
        <Route
          path={`/myaccount/users/sales/:id`}
          element={userIsAdmin ? <UserPurchase /> : <h1>not admin</h1>}
        />
         <Route
          path={`/shoppingcart`}
          element={<ShoppingCartLogOut/>}
        />
         <Route
          path={`/:id`}
          element={<InspectProduct/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
