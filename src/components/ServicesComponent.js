import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function ClientList({ restaurantsfl }) {
  const sortedClientList = (restaurantArr) => {
    return restaurantArr.sort((a, b) => {
      const objA = a.name.toUpperCase();
      const objB = b.name.toUpperCase();
      return objA < objB ? -1 : objA > objB ? 1 : 0;
    });
  };
  console.log(sortedClientList(restaurantsfl));
  return (
    <div className="box">
      <Card>
        <CardBody>
          <CardTitle>Client List</CardTitle>
          <CardSubtitle>Restaurants by name:</CardSubtitle>
          <hr />
          <CardText>
            <ul>
              {sortedClientList(restaurantsfl).map((restaurant) => (
                <li key={restaurant.key}>{restaurant.name}</li>
              ))}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function Services({ services }) {
  return (
    <div>
      <Card>
        <CardTitle>Services</CardTitle>
        <CardSubtitle>Services provided:</CardSubtitle>
        <hr />
        <CardText>
          <ul>
            {services.map((service) => (
              <li key={service.key}>
                {service.title}
                {services.description}
              </li>
            ))}
          </ul>
        </CardText>
      </Card>
    </div>
  );
}

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
        <div className="col-sm-5 m-2">
          <Services services={props.services} />
        </div>
        <div className="row">
          <div className="col-sm-5 m-2">
            <ClientList restaurantsfl={props.restaurantsfl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderServices;
