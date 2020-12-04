import React from "react";
import Calendermonthly from './calender_Monthly';
import Picker from './calender_components/datePicker'
/*<p>
Her skal der vises en kalender.
<br/> husk:
<br/>npm install @material-ui/core og 
npm i --save @devexpress/dx-react-core @devexpress/dx-react-scheduler samt
npm i --save @devexpress/dx-react-scheduler-material-ui <br/>
og npm i @date-io/date-fns@1.x date-fns
</p>*/
const UserSite = () => {
  
  return (
    <>
    
    <br/>
        <Picker/>
        <br/>
        <br/>
      <Calendermonthly/>
    </>
  );
};

export default UserSite;
