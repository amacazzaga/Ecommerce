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
import UserPurchase from "./views/UserPurchase";

import InspectProduct from "./views/InspectProduct";
import InspectProductLogged from "./views/InspectProductLogged";
import UserProfile from "./views/UserProfile";
import HomeCategoryLoggedOut from "./views/HomeCategoryLoggedOut";
import HomeCategoryLoggedIn from "./views/HomeCategoryLoggedIn";
import HomeSearchProductLogOut from "./views/HomeSearchProductLogOut";
import HomeSearchProductLogIn from "./views/HomeSearchProductLogIn";
import ShoppingCartLayoutLogOut from "./views/ShoppingCartLayoutLogOut";
import ShoppingCartLayOutLogged from "./views/ShoppingCartLayOutLogged";

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
          element={userIsAdmin ? <AdminBoardHome /> : <UserProfile />}
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
        <Route path={`/shoppingcart`} element={userId?<ShoppingCartLayOutLogged/>:<ShoppingCartLayoutLogOut/>} />
        <Route
          path={`/:id`}
          element={userId ? <InspectProductLogged /> : <InspectProduct />}
        />
         <Route
          path={`/:band/:category`}
          element={userId?<HomeCategoryLoggedIn/>:<HomeCategoryLoggedOut/>}
        />
         <Route
          path={`/search/:name`}
          element={userId?<HomeSearchProductLogIn/>:<HomeSearchProductLogOut/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
