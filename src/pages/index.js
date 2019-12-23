import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap'
import Image from "../components/image"
import Navi from "../components/navcomp"
import CardComp from "../components/c_card"
import FooterComp from "../components/c_footer"

const THEME_1 = {
  label: 'light',
  hero: 'mosque.jpg',
  card1: 'card1.jpg',
  card2: 'card2.jpg',
  card3: 'card3.jpg'
};

const THEME_2 = {
  label: 'dark',
  hero: 'mosque1a.jpg',
  card1: 'card1a.jpg',
  card2: 'card2a.jpg',
  card3: 'card3a.jpg'
};

let hero_img;
let card1;
let card2;
let card3;
let cmsVar;

const setVar = (theVar, cmsVar) => {
    cmsVar = (theVar !== undefined && theVar !== null) ? theVar : THEME_2.label;
    setTheme(cmsVar);
    // setTheme(THEME_2.label);
  }

  const setTheme = (inputFromCMS) =>{
    console.log('Theme call: '+inputFromCMS);
    if (inputFromCMS === THEME_1.label) {
      require('../styles/bootstrap-extended.scss');
      hero_img = THEME_1.hero;
      card1 = THEME_1.card1;
      card2 = THEME_1.card2;
      card3 = THEME_1.card3;
    } else {
        hero_img = THEME_2.hero;
        card1 = THEME_2.card1;
        card2 = THEME_2.card2;
        card3 = THEME_2.card3;
        require('bootstrap/dist/css/bootstrap.min.css');
        // require('reactstrap/dist/reactstrap.min');
      }
  }

  const IndexPage = ({data}) => (
    <div className="container">
      {setVar(data.allContentfulThemeColor.edges[0]["node"]["colorName"],cmsVar)}
      <Container>
      <Navi mytheme={cmsVar}/>
      <Image filename={hero_img} />
      <h4 style={{lineHeight:`2em`,color:`rgba(87, 0, 0, 0.5)`,textAlign:`center`,width:`100%`}}>Beautiful... Picturesque and Nature!!</h4>
        <Row>
          <Col md="4"><CardComp imgName={card1} cardTitle="Card No. 1" cardSubTitle="One liner for card one" /></Col>
          <Col md="4"><CardComp imgName={card2} cardTitle="Card # Two" cardSubTitle="One liner for card TWO"  /></Col>
          <Col md="4"><CardComp imgName={card3} cardTitle="Three goes here"  cardSubTitle="One liner for card Three" /></Col>
        </Row>
      </Container>
      <FooterComp />
  </div>
)

export const query = graphql`
  {
    allContentfulThemeColor {
      edges {
        node {
          colorName
        }
      }
    }
  }
`

export default IndexPage

// <Link to="/page-2/">Go to page 2</Link>
// import { Link } from "gatsby"
// import CarouselComp from "../components/c_carousel"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

