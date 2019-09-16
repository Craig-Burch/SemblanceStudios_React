/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header coColorBGdark"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div>
          <Row>
          <Col className="text-center" md="4">
           <Card>
              <img
                className="marginsImages"
                alt="..."
                src={require("assets/img/portfolio/BigHornSmall.png")}
               />
             <CardBody>
               <CardTitle>Card title</CardTitle>
               <CardSubtitle>Card subtitle</CardSubtitle>
               <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
               <Button className="btn-round companyGradient gradientBtn">View</Button>
             </CardBody>
           </Card>
           </Col>
           <Col className="text-center" md="4">
           <Card>
             <img
               className="marginsImages"
                alt="..."
                src={require("assets/img/portfolio/ren-scaled.png")}
              />
             <CardBody>
               <CardTitle>Card title</CardTitle>
               <CardSubtitle>Card subtitle</CardSubtitle>
               <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
               <Button className="btn-round companyGradient gradientBtn">View</Button>
             </CardBody>
           </Card>
           </Col>
           <Col className="text-center" md="4">
           <Card>
              <img
                 className="marginsImages"
                 alt="..."
                 src={require("assets/img/portfolio/dh.png")}
               />
             <CardBody>
               <CardTitle>Card title</CardTitle>
               <CardSubtitle>Card subtitle</CardSubtitle>
               <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
               <Button className="btn-round companyGradient gradientBtn">View</Button>
             </CardBody>
           </Card>
           </Col>
           </Row>
         </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
