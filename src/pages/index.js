import React from "react"
// import 'reactstrap/dist/reactstrap.min'
import { Container, Row, Col } from 'reactstrap';
import Image from "../components/image"
import Navi from "../components/navcomp"
import CardComp from "../components/c_card"
import FooterComp from "../components/c_footer"

let hero_img = "mosque1a.jpg";
let card1 = "card1a.jpg";
let card2 = "card2a.jpg";
let card3 = "card3a.jpg";

//TODO -- this would come from Contentful
const theme_var = 'lights';

if (theme_var === 'light'){
  require ('../styles/bootstrap-extended.scss');
  hero_img = "mosque.jpg";
  card1 = "card1.jpg";
  card2 = "card2.jpg";
  card3 = "card3.jpg";
  } else{
  require ('bootstrap/dist/css/bootstrap.min.css');
}

const IndexPage = () => (
  <div className="container">
    <Container>
    <Navi mytheme={theme_var}/>
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

export default IndexPage

// EXAMPLE: Conditional loading of CSS 
// class Main extends Component {
  //   componentWillMount() {
    //        if(this.props.language === 'ar') {
      //           require('arabic.css');
      //        } else {
        //           require('english.css');
        //        }
        //   }
        // }
                
        // <Link to="/page-2/">Go to page 2</Link>
        // import { Link } from "gatsby"

// import CarouselComp from "../components/c_carousel"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

