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
  const [successMessage, setSuccessMessage] = useState("");
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
      setSuccessMessage("You have updated your information");
    } catch (error) {
      console.log(error);
      setSuccessMessage("Your info hasnt been updated");
    }
  };
  //
  useEffect(() => {
    getUser();
  }, []);

  return (
    <LayoutLogged>
      <div className="container-xl">
        <div className="d-flex justify-content-center">
        <h5 className="m-3">{successMessage}</h5>
        </div>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label fw-bold">
             Name
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
          <label for="exampleFormControlInput1" class="form-label fw-bold">
             Last Name
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
          <label for="exampleFormControlInput1" class="form-label fw-bold">
             Email Address
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
          <label for="exampleFormControlInput1" class="form-label fw-bold">
            Your New Password Here 
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
      </div>
    </LayoutLogged>
  );
};

export default UserProfile;
