import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Portfolio from './PortfolioComponent';
import RestaurantInfo from './RestaurantInfoComponent';
import Contact from './ContactComponent';
import { RESTAURANTS } from '../shared/restaurants';
import { MENUS } from '../shared/menus';


const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        menus: state.menus,
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: RESTAURANTS,
            menus: MENUS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home restaurant={this.state.restaurants.filter(restaurant => restaurant.featured)[0]} />
            );
        };
        const RestaurantWithId = ({match}) => {
            return (
                <RestaurantInfo
                    restaurant={this.state.restaurants.filter(restaurant => restaurant.id === +match.params.restaurantId)[0]}
                    menus ={this.state.menus.filter(menu => menu.menuId === +match.params.menuId)}
                />
            ); 
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/portfolio' render={() => <Portfolio restaurants={this.state.restaurants} />} />
                    <Route path='/portfolio/:restaurantId' component={RestaurantWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));