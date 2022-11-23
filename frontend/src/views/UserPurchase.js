import React from "react";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect} from "react";

const UserPurchase = () => {
    const [cookie] = useCookies();
    const token = cookie.token;
    const {id} =useParams()
    const getSales = async () => {
        const resp = await axios
          .get(`http://localhost:4000/sales/${id}`, {
            headers: { Authorization: token },
          })
          .then((resp) => {
           console.log(resp)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
       getSales()
      }, [])
      
  return (
    <LayoutLoggedAdm>
      <div>{id}</div>
    </LayoutLoggedAdm>
  );
};

export default UserPurchase;
