import React, { useState } from "react";
import facade from "./apiFacade";

import Calender_Monthly from './calender_Monthly';




const UserSite = () => {


  return (
    <>
     

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
