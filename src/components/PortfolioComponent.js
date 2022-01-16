import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderPortfolioItem({restaurant}) {
    return (
        <Card>
            <Link to={`/portfolio/${restaurant.id}`}>
                <CardImg width="100%" src={restaurant.image} alt={restaurant.name} />
                <CardImgOverlay>
                    <CardTitle>{restaurant.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
function Portfolio(props) {
    const portfolio = props.restaurants.map(restaurant => {
        return (
            <div key={restaurant.id} className="col-md-5 m-1">
                <RenderPortfolioItem restaurant={restaurant} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Portfolio</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Portfolio</h2>
                    <hr />
                </div>
                <div className="row">
                    {portfolio}
                </div>
            </div>
        </div>
    );
}
export default Portfolio;
