import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.altImg} alt={item.name} />
            <CardBody>
                <CardTitle>Bill Hayden</CardTitle>
                <CardSubtitle>Owner &amp; Consultant</CardSubtitle>
                <hr />
                <CardText>Bill Hayden has served the Pacific NorthWest for over 20 years as a restaurant consultant &amp; owner. Over 300 restaurants and businesses have utilized Bill's expertise and skills to: improve customer satisfaction, train employees and increase profits while reducing losses.</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.restaurant} />
                </div>
            </div>
        </div>
    );
}

export default Home;