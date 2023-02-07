import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import LayoutLogged from "../components/LayoutLogged";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [name, setEditName] = useState();
  const [lastName, setEditLastName] = useState();
  const [email, setEditEmail] = useState();
  const [password, setEditPassword] = useState();
  const [cookie] = useCookies();
  const token = cookie.token;
  const decoded = jwt_decode(token);
  const userId = decoded.id;
  //
  const getUser = async () => {
    const resp = await axios
      .get(`http://localhost:4000/user/myprofile?userid=${userId}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      });
  };
  //
  const updateMyProfile = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(
        `http://localhost:4000/user/edit/${userId}`,
        {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        },
        { headers: { Authorization: token } }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  //
  useEffect(() => {
    getUser();
  }, []);

  return (
    <LayoutLogged>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Your Name
          </label>
          <input
            type="email"
            class="form-control"
            placeholder={user.name}
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
        <div class="mb-3"></div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Your Last Name
          </label>
          <input
            type="email"
            class="form-control"
            placeholder={user.lastName}
            onChange={(e) => setEditLastName(e.target.value)}
          />
        </div>
        <div class="mb-3"></div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Your Email Address
          </label>
          <input
            type="email"
            class="form-control"
            placeholder={user.email}
            onChange={(e) => setEditEmail(e.target.value)}
          />
        </div>
        <div class="mb-3"></div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Your New Password
          </label>
          <input
            type="password"
            class="form-control"
            placeholder=""
            onChange={(e) => setEditPassword(e.target.value)}
          />
        </div>
        <div class="mb-3"></div>
        <button
          onClick={updateMyProfile}
          type="button"
          class="btn btn-success m-3"
        >
          Save my new information!
        </button>
      </form>
    </LayoutLogged>
  );
};

export default UserProfile;
