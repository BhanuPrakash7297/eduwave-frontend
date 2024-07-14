import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import shap13 from "../../../assets/images/shape-11-07.png";
import shap14 from "../../../assets/images/shape-01-02.png";
import shap15 from "../../../assets/images/shape-03.png";
import shap16 from "../../../assets/images/shape-13-12.png";
import shap17 from "../../../assets/images/shape-36.png";
import shap18 from "../../../assets/images/shape-05-07.png";
const BreadCrumb = ({ title, currentPage }) => {
  return (
    <div className="edu-breadcrumb-area mt-10">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner">
              <div className="page-title">
                <h3 className="title">{title}</h3>
              </div>
              <div className="edu-breadcrumb-nav">
                <ol className="edu-breadcumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="separator">
                    <IoIosArrowForward />
                  </li>
                  <li className="breadcrumb-item active">{currentPage}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-wrapper d-xl-block d-none">
          <div className="shap-image shape-image-1">
            <img src={shap13} alt="" />
          </div>
          <div className="shap-image shape-image-2">
            <img src={shap14} alt="" />
          </div>
          <div className="shap-image shape-image-3">
            <img src={shap15} alt="" />
          </div>
          <div className="shap-image shape-image-4">
            <img src={shap16} alt="" />
          </div>
          <div className="shap-image shape-image-5">
            <img src={shap17} alt="" />
          </div>
          <div className="shap-image shape-image-6">
            <img src={shap18} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
