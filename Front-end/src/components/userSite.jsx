import React, { useState } from "react";
import facade from "./apiFacade";
import { UserUrlUserCount } from "./../sites";
import Calender_Monthly from './calender_Monthly';


const url = UserUrlUserCount;

const UserSite = () => {
  const [count, setCount] = useState("");
  return (
    <>
      <p>Number of users on this site: {count}</p>
      <button
        onClick={() =>
          fetch(url, facade.makeOptions("GET", true))
            .then((res) => res.json())
            .then((data) => setCount(data))
        }
      >
        Hente antal bruger
      </button>

      <p>
        Her skal der vises en kalender.
        <br/> husk:
        <br/>npm install @material-ui/core og 
        npm i --save @devexpress/dx-react-core @devexpress/dx-react-scheduler samt
        npm i --save @devexpress/dx-react-scheduler-material-ui <br/>
      </p>
      <Calender_Monthly/>
    </>
  );
};

export default UserSite;
