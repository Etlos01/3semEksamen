import React, { useState } from "react";
import facade from "./apiFacade";
import { UserUrlUserCount } from "./../sites";
import Calendermonthly from './calender_Monthly';
import Picker from './calender_components/datePicker'

const url = UserUrlUserCount;

const UserSite = () => {
  const [count, setCount] = useState("");
  return (
    <>
    <br/>
    <br/>
        <Picker/>
      <p>
        Her skal der vises en kalender.
        <br/> husk:
        <br/>npm install @material-ui/core og 
        npm i --save @devexpress/dx-react-core @devexpress/dx-react-scheduler samt
        npm i --save @devexpress/dx-react-scheduler-material-ui <br/>
        og npm i @date-io/date-fns@1.x date-fns
      </p>
      <Calendermonthly/>
    </>
  );
};

export default UserSite;
