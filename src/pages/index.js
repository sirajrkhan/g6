import React from "react"
import { Link } from "gatsby"
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/bootstrap-extended.scss'
import 'reactstrap/dist/reactstrap.min'
import { Container, Row, Col } from 'reactstrap';

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import Image from "../components/image"
import Navi from "../components/navcomp"
import CarouselComp from "../components/c_carousel"
import CardComp from "../components/c_card"
import FooterComp from "../components/c_footer"

const IndexPage = () => (
  <div className="container">
    <Navi />
    <CarouselComp />

    <Container>
      <Row>
        <Col md="4"><CardComp /></Col>
        <Col md="4"><CardComp /></Col>
        <Col md="4"><CardComp /></Col>
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

// <h1>Hello There!</h1>
// <p>Let's build something great.</p>
// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//   <Image />
// </div>
// <Link to="/page-2/">Go to page 2</Link>