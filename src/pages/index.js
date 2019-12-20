import React from "react"
// import { Link } from "gatsby"
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/bootstrap-extended.scss'
import 'reactstrap/dist/reactstrap.min'
import { Container, Row, Col } from 'reactstrap';

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import Image from "../components/image"
import Navi from "../components/navcomp"
// import CarouselComp from "../components/c_carousel"
import CardComp from "../components/c_card"
import FooterComp from "../components/c_footer"

const theme_var = 'light';

const IndexPage = () => (
  <div className="container">
    <Container>
    <Navi mytheme={theme_var}/>
    <Image filename="mosque.jpg" />
    <h4 style={{lineHeight:`2em`,color:`rgba(87, 0, 0, 0.5)`,textAlign:`center`,width:`100%`}}>These are few cards to choose from!!</h4>
      <Row>
        <Col md="4"><CardComp imgName="green_sunset.jpg" cardTitle="Card No. 1" cardSubTitle="One liner for card one" /></Col>
        <Col md="4"><CardComp imgName="sea.jpg" cardTitle="Card # Two" cardSubTitle="One liner for card TWO"  /></Col>
        <Col md="4"><CardComp imgName="building.jpg" cardTitle="Three goes here"  cardSubTitle="One liner for card Three" /></Col>
      </Row>
    </Container>
    <FooterComp />
  </div>
)

export default IndexPage

/* <div className="exp">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div> */
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

// <h1>Hello There!</h1>
// <p>Let's build something great.</p>
// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//   <Image />
// </div>
// <Link to="/page-2/">Go to page 2</Link>