import React, { Component } from "react";
import { actions } from "react-redux-form";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Portfolio from "./PortfolioComponent";
import RestaurantInfo from "./RestaurantInfoComponent";
import Contact from "./ContactComponent";
import RenderServices from "./ServicesComponent";
import {
  postRequest,
  fetchRestaurants,
  fetchRequests,
  fetchServices,
  fetchRestaurantsFl,
  postContactMessage,
  fetchExamples,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    services: state.services,
    restaurantsfl: state.restaurantsfl,
    requests: state.requests,
    examples: state.examples,
  };
};

const mapDispatchToProps = {
  postRequest: (requestId, title, firstName, lastName, phone, email, message) =>
    postRequest(requestId, title, firstName, lastName, phone, email, message),
  fetchRestaurants: () => fetchRestaurants(),
  resetMessageForm: () => actions.reset("contactMessageForm"),
  fetchRequests: () => fetchRequests(),
  fetchServices: () => fetchServices(),
  fetchRestaurantsFl: () => fetchRestaurantsFl(),
  postContactMessage: (
    firstName,
    lastName,
    phoneNum,
    email,
    agree,
    contactType,
    message
  ) =>
    postContactMessage(
      firstName,
      lastName,
      phoneNum,
      email,
      agree,
      contactType,
      message
    ),
  fetchExamples: () => fetchExamples(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
    this.props.fetchRequests();
    this.props.fetchServices();
    this.props.fetchRestaurantsFl();
    this.props.fetchExamples();
  }
  render() {
    const RestaurantWithId = ({ match }) => {
      return (
        <div>
          <RestaurantInfo
            restaurant={
              this.props.restaurants.restaurants.filter(
                (restaurant) => restaurant.id === +match.params.restaurantId
              )[0]
            }
            isLoading={this.props.restaurants.isLoading}
            errMess={this.props.restaurants.errMess}
            requests={this.props.requests.requests.filter(
              (request) => request.restaurantId === +match.params.restaurantId
            )}
            requestsErrMess={this.props.requests.errMess}
            postRequest={this.props.postRequest}
          />
        </div>
      );
    };
    const ServicesList = ({ match }) => {
      return (
        <RenderServices
          restaurantsfl={this.props.restaurantsfl}
          restaurantsflLoading={this.props.restaurantsfl.isLoading}
          restaurantsflErrMess={this.props.restaurantsfl.errMess}
          services={this.props.services}
          servicesLoading={this.props.services.isLoading}
          servicesErrMess={this.props.services.errMess}
          requests={this.props.requests.requests.filter(
            (request) => request.restaurantId === +match.params.restaurantId
          )}
          requestsErrMess={this.props.requests.errMess}
          postRequest={this.props.postRequest}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <Home restaurants={this.props.restaurants} />}
          />
          <Route
            exact
            path="/portfolio"
            render={() => <Portfolio restaurants={this.props.restaurants} />}
          />
          <Route path="/portfolio/:restaurantId" component={RestaurantWithId} />
          <Route
            exact
            path="/contactus"
            render={() => (
              <Contact
                resetMessageForm={this.props.resetMessageForm}
                postContactMessage={this.props.postContactMessage}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={() => (
              <ServicesList
                services={this.props.services}
                restaurantsfl={this.props.restaurantsFl}
                requests={this.props.requests}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
