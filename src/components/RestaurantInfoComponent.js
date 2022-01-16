import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RestaurantInfo(props) {
    if (props.restaurant) {
        return (
            <div className="container">
                <div className="row">
                    <RenderRestaurant restaurant={props.restaurant} />
                    <RenderMenus menus={props.menus} />
                </div>
            </div>
        );
    }


function RenderRestaurant({ restaurant }) {
    return (
        <div className="col-md-5 m-1">
            <h4>{restaurant.name}</h4>
            <Card>
                <CardImg top src={restaurant.image} alt={restaurant.name} />
                <CardBody>
                    <CardText>{restaurant.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderMenus({ menus }) {
    return (
        <div className="col-md-5 m-1">
            <h4>{menus.name}</h4>
            <Card>
                <CardImg top src={menus.image} alt={menus.name} />
                <CardBody>
                    <CardText>{menus.example}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
// function RenderMenus({ menus }) {
//     if (menus) {
//         return (
//             <div class="col-md-5 m-1">
//                 <h4>Menus</h4>
//                 <Card>
//                     <CardImg top src={menus.example} alt={menus.name} />
//                 </Card>
//                 {menus.map((menu) => {
//                     return (
//                         <div key={menu.id}>
//                             <p>hello</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
//     return <div />;
// }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/portfolio">Portfolio</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.restaurant.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.restaurant.name}</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderRestaurant restaurant={props.restaurant} />
                <RenderMenus menus={props.menu} />
            </div>
        </div>
    );
}
export default RestaurantInfo;