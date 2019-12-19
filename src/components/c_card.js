import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Image from './image';

const CardComp = (props) => {
  return (
    <div style={{ maxWidth: `100%`, padding: `2px`, margin: `2px` }}>
      <Card>
      <Image filename={props.imgName} />
        <CardBody>
          <CardTitle><h3>{props.cardTitle}</h3></CardTitle>
          <CardSubtitle><p className="card-subtitle">{props.cardSubTitle}</p></CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComp;