import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  DateNavigator,
  TodayButton,
  AllDayPanel,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Holidays } from "./holiday_component/holiday_fetcher";
import { Event } from "./event_components/event_fetcher";
import Picker from './calender_components/datePicker'


function Arrays() {
  const holiday_array = Holidays();

  const appointment_array = Event();


  if (holiday_array === undefined && appointment_array === undefined) {
    console.log("loading");
  } else {
    const data = holiday_array.concat(appointment_array);
    return data;
  }
}

export default function Month() {
  
  const data = Arrays();



  const appointments = [
    {
      endDate: "2020-12-31T24:00",
      startDate: "2020-12-31T22:00",
      title: "Nytårsaftensdag",
    },
  ];

  const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: "#4615b2",
        borderRadius: "8px",
      }}
    >
      {children}
    </Appointments.Appointment>
  );
  return (
    <>
        <Picker/>
      <Paper>
        <Scheduler data={data} height={650}>
          <ViewState
            defaultCurrentDate={new Date()}
            defaultCurrentViewName="Week"
          />

          <WeekView startDayHour={10} endDayHour={19} />
          <MonthView />
          <DayView />

          <Toolbar />
          <DateNavigator />
          <TodayButton />

          <AllDayPanel />
          <ViewSwitcher />

          <Appointments appointmentComponent={Appointment} />
          <CurrentTimeIndicator />
        </Scheduler>
      </Paper>
    </>
  );
}
