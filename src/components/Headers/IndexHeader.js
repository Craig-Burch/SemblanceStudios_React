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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark headerBGimage"
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
            <img className="presentation-title" alt="..." src={require("assets/img/studio/mainLogo2.png")} /> 
            </div>
            <h2 className="presentation-subtitle text-center">
              Graphic Design and Web Development Studio.
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="/index"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/studio/logoSmall.png")}
            />
          </a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
