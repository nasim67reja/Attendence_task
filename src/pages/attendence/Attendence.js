import axios from "axios";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { URL } from "../../App";
import ultimate from "./../../assets/ultimate.svg";
import "./attendence.scss";

const ListEl = ({ el, date }) => {
  return (
    <li className="employee-info" key={el.id}>
      <div>{date}</div>
      <div>{el.name}</div>
      <div>{el.attendance[date].status}</div>
    </li>
  );
};

const Attendence = () => {
  const [token, setToken] = useState([]);
  const [attendance, setAttendance] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setToken(token);
    }
  }, [token]);

  const signUpPostCall = useCallback(async () => {
    if (token.length > 1) {
      try {
        const data = await axios({
          method: "get",
          url: `${URL}/test`,
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(data);
        setAttendance(data.data);
      } catch (error) {
        console.log(`error: `, error);
      }
    }
  }, [token]);

  useEffect(() => {
    signUpPostCall();
  }, [signUpPostCall]);

  let arr = [];
  for (let i = 1; i < 31; i++) {
    let newDate = `2022-11-${i < 10 ? `0${i}` : i}`;
    arr.push(
      <Fragment key={Math.random()}>
        {attendance &&
          Object.values(attendance).map((el, i) => (
            <ListEl el={el} key={Math.random()} date={newDate} />
          ))}
      </Fragment>
    );
  }

  return (
    <div className="attendance">
      <div className="container">
        <img src={ultimate} alt="ultimate-svg" />
        <div className="flex-center">
          <h2>Attendance information</h2>
        </div>

        <ul className="list">
          <li className="list-header">
            <div>Date</div>
            <div>Employee</div>
            <div>Status</div>
          </li>
          {attendance && <>{arr}</>}
        </ul>
      </div>
    </div>
  );
};

export default Attendence;
