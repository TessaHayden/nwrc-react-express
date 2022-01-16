import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Portfolio from "./PortfolioComponent";
import RestaurantInfo from "./RestaurantInfoComponent";
import Contact from "./ContactComponent";
import RenderServices from "./ServicesComponent";

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    menus: state.menus,
    services: state.services,
    restaurantsfl: state.restaurantsfl,
    examples: state.examples,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          restaurant={
            this.props.restaurants.filter(
              (restaurant) => restaurant.featured
            )[0]
          }
          examples={this.props.examples}
        />
      );
    };
    const RestaurantWithId = ({ match }) => {
      return (
        <div>
          <RestaurantInfo
            restaurant={
              this.props.restaurants.filter(
                (restaurant) => restaurant.id === +match.params.restaurantId
              )[0]
            }
            menus={
              this.props.menus.filter(
                (menu) => menu.id === +match.params.restaurantId
              )[0]
            }
          />
        </div>
      );
    };
    const ServicesList = () => {
      return (
        <RenderServices
          restaurantsfl={this.props.restaurantsfl}
          services={this.props.services}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/portfolio"
            render={() => (
              <Portfolio
                restaurants={this.props.restaurants}
                menus={this.props.menus}
              />
            )}
          />
          <Route path="/portfolio/:restaurantId" component={RestaurantWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/services" component={ServicesList} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
