import React, { useState } from "react";
import {
  // Card,
  // CardText,
  // CardBody,
  // CardTitle,
  // CardSubtitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [{}];

function CalendarFn() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="calendar-app">
      <h1>Calendar</h1>
      <h2>Add new event</h2>
      <div>
        <input
          type="text"
          placeholder="add title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <Button onClick={handleAddEvent}>Add Event Request</Button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

// function ClientList({ restaurantsfl }) {
//   if (restaurantsfl) {
//     const sortedClientList = (restaurantArr) => {
//       return restaurantArr.sort((a, b) => {
//         const objA = a.name.toUpperCase();
//         const objB = b.name.toUpperCase();
//         return objA < objB ? -1 : objA > objB ? 1 : 0;
//       });
//     };
//     console.log(sortedClientList(restaurantsfl));

//     return (
//       <div className="box">
//         <Card>
//           <CardBody>
//             <CardTitle>Client List</CardTitle>
//             <CardSubtitle>Restaurants by name:</CardSubtitle>
//             <hr />
//             <CardText>
//               <ul>
//                 {sortedClientList(restaurantsfl).map((restaurant) => (
//                   <li key={restaurant.key}>{restaurant.name}</li>
//                 ))}
//               </ul>
//             </CardText>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
//   return <div />;
// }

// function Services({ services }) {
//   if (services) {
//     return (
//       <div>
//         <Card>
//           <CardTitle>Services</CardTitle>
//           <CardSubtitle>Services provided:</CardSubtitle>
//           <hr />
//           <CardText>
//             <ul>
//               {services.map((service) => (
//                 <li key={service.key}>
//                   {service.title}
//                   {services.description}
//                 </li>
//               ))}
//             </ul>
//           </CardText>
//         </Card>
//       </div>
//     );
//   }
//   return <div />;
// }

function RenderServices(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <Link to="/services">Services</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 m-1">
          <CalendarFn />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-sm-5 m-2">
          <Services services={props.services} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 m-2">
          <ClientList restaurantsfl={props.restaurantsfl} />
        </div>
      </div> */}
    </div>
  );
}

export default RenderServices;
