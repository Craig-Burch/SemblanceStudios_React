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
import { MDBBtn, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';    

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
         <MDBContainer className="displayDesktop">
         <MDBRow>
          <MDBCol size="4">
           <MDBCard style={{ width: "22rem"}} className="minheight-adjust">  
             <MDBCardImage className="img-fluid marginsImages" src="img-fluid" src={require("assets/img/portfolio/BigHornSmall.png")} waves />
             <MDBCardBody>
               <MDBCardTitle>Card title</MDBCardTitle>
               <MDBCardText>
                 Some quick example text to build on the card title and make
                 up the bulk of the card&apos;s content.
               </MDBCardText>
               <MDBBtn href="#">MDBBtn</MDBBtn>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
          <MDBCol size="4">
           <MDBCard style={{ width: "22rem" }} className="minheight-adjust">
             <MDBCardImage className="img-fluid marginsImages" src={require("assets/img/portfolio/ren-scaled.png")} waves />
             <MDBCardBody>
               <MDBCardTitle>Card title</MDBCardTitle>
               <MDBCardText>
                 Some quick example text to build on the card title and make
                 up the bulk of the card&apos;s content.
               </MDBCardText>
               <MDBBtn href="#">MDBBtn</MDBBtn>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
          <MDBCol size="4">
           <MDBCard style={{ width: "22rem" }} className="minheight-adjust">
             <MDBCardImage className="img-fluid marginsImages" src={require("assets/img/portfolio/dh.png")} waves />
             <MDBCardBody>
               <MDBCardTitle>Card title</MDBCardTitle>
               <MDBCardText>
                 Some quick example text to build on the card title and make
                 up the bulk of the card&apos;s content.
               </MDBCardText>
               <MDBBtn href="#">MDBBtn</MDBBtn>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
         </MDBRow>
         </MDBContainer>
         <MDBContainer className="displayMobile">
         <MDBRow>
          <MDBCol size="8">
           <MDBCard style={{ width: "22rem" }}>
             <MDBCardImage className="img-fluid" src="assets/img/portfolio/BigHornSmall.png" waves />
             <MDBCardBody>
               <MDBCardTitle>Card title</MDBCardTitle>
               <MDBCardText>
                 Some quick example text to build on the card title and make
                 up the bulk of the card&apos;s content.
               </MDBCardText>
               <MDBBtn href="#">MDBBtn</MDBBtn>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
          <MDBCol size="8">
           <MDBCard style={{ width: "22rem" }}>
             <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
             <MDBCardBody>
               <MDBCardTitle>Card title</MDBCardTitle>
               <MDBCardText>
                 Some quick example text to build on the card title and make
                 up the bulk of the card&apos;s content.
               </MDBCardText>
               <MDBBtn href="#">MDBBtn</MDBBtn>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
          <MDBCol size="8">
           <MDBCard style={{ width: "22rem" }}>
             <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
             <MDBCardBody>
               <MDBCardTitle>Card title</MDBCardTitle>
               <MDBCardText>
                 Some quick example text to build on the card title and make
                 up the bulk of the card&apos;s content.
               </MDBCardText>
               <MDBBtn href="#">MDBBtn</MDBBtn>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
         </MDBRow>
         </MDBContainer>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
