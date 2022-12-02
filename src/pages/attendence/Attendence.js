import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { URL } from "../../App";
import "./attendence.scss";

const Attendence = () => {
  const [token, setToken] = useState([]);

  const signUpPostCall = useCallback(async () => {
    if (token) {
      try {
        // const data = await axios.post(`${URL}/signup`, );
        console.log(token);
        const data = await axios({
          method: "post",
          url: `${URL}/test`,
          headers: { Authorization: `Bearer ${token}` },
        });
        //  setIsloading(false);
        //  setSuccessful("Sign Up successfully");
        console.log(data);

        // setTimeout(() => {
        //   navigate("/login");
        //   // document.location.reload();
        //   //  setSuccessful("");
        // }, 1000);
      } catch (error) {
        console.log(`error: `, error);
      }
    }
  }, [token]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setToken(token);
    }
    signUpPostCall();
  }, [token, signUpPostCall]);

  return <div>Attendence</div>;
};

export default Attendence;
