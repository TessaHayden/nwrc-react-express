import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";
import Carousel from "react-bootstrap/Carousel";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


  function RenderRestaurant({ restaurant }) {
    return (
      <div className="col-md-8 offset-2 mb-4">
        <h4>{restaurant.name}</h4>
        <Fade in key={restaurant.id}>
          <Card className="col-sm-7">
            <CardImg top src={baseUrl + restaurant.altImg} alt={restaurant.name} />
            <CardBody>
              <CardText>{restaurant.description}</CardText>
            </CardBody>
          </Card>
          <Carousel interval={4000} keyboard={false} pauseOnHover={true}>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src={baseUrl + restaurant.carousel4}
                alt={restaurant.name}
              />
              <Carousel.Caption>
                {restaurant.name}
                <a href={restaurant.website} target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src={baseUrl + restaurant.carousel1}
                alt={restaurant.name}
              />
              <Carousel.Caption>
                {restaurant.name}
                <a href={restaurant.website} target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src={baseUrl + restaurant.carousel2}
                alt={restaurant.name}
              />
              <Carousel.Caption>
                {restaurant.name}
                <a href={restaurant.website} target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src={baseUrl + restaurant.carousel3}
                alt={restaurant.name}
              />
              <Carousel.Caption>
                {restaurant.name}
                <a href={restaurant.website} target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Fade>
      </div>
    );
  }

function RestaurantInfo(props) {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  if (props.restaurant) {
    return (
      <div className="container">
        <div className="row">
          <RenderRestaurant restaurant={props.restaurant} />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/portfolio">Portfolio</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.restaurant.name}</BreadcrumbItem>
          </Breadcrumb>
          <h2>{props.restaurant.name}</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <RenderRestaurant restaurant={props.restaurant} />
        </div>
      </div>
    </div>
  );
}
export default RestaurantInfo;
