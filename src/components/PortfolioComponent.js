import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Fade } from "react-animation-components";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderPortfolioItem({ restaurant }) {
  return (
    <Card>
      <Link to={`/portfolio/${restaurant.id}`}>
        <CardImg width="100%" src={baseUrl + restaurant.image} alt={restaurant.name} />
        <CardImgOverlay>
          <CardTitle>{restaurant.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
function Portfolio(props) {
  const portfolio = props.restaurants.restaurants.map((restaurant) => {
    return (
      <div key={restaurant.id} className="col-md-5 m-1">
        <Fade in>
          <RenderPortfolioItem restaurant={restaurant} />
        </Fade>
      </div>
    );
  });
  if (props.restaurants.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.restaurants.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.restaurants.errMess}</h4>
          </div>
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
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Portfolio</BreadcrumbItem>
          </Breadcrumb>
          <h2>Portfolio</h2>
          <hr />
        </div>
        <div className="row">{portfolio}</div>
      </div>
    </div>
  );
}
export default Portfolio;
