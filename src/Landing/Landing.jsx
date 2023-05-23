import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Landing.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import logo from "./TEAM SURVEI.png";

const Landing = () => {
  const goToIsiSurvey = () => {
    navigate("/Isi");
  };

  const goToBuatSurvey = () => {
    navigate("/QuizState");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="45"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Team<strong>Survei</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="box-landing"></div>

      <Container>
        <div className="center-btn">
          <div className="dua-btn">
            {/* <Button
              onClick={() => goToBuatSurvey()}
              className="btn-buat"
            >
              BUAT SURVEY
            </Button> */}
            <Button
              className="btn-isi"
              onClick={() => goToIsiSurvey()}
            >
              ISI SURVEY
            </Button>
          </div>
        </div>
      </Container>
      <h4 className="footer">© 2023 Copyright, Kadek FE Dev, All rights reserved.</h4>
    </div>
  );
};

export default Landing;
