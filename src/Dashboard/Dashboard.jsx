import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import "./Dashboard.css";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../src/App/features/Login/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBuilding, faEnvelope, faFlag, faGenderless, faUser } from "@fortawesome/free-solid-svg-icons";

const Dasboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(
    []
    // username: "",
    // email: "",
    // pekerjaan: "",
    // gender: "",
    // languages: ["html"],
  );

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = () => {
    // const payload = {...user}
    // payload.languages = payload.languages.join (",")
    console.log(user);
    fetch(`https://sore-tan-calf-garb.cyclic.app/api/isi-survei`, {
      method: "GET",
      // body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setUserData({ user: data?.user, token: data?.token }));

        createItem(data);
        setUser(data);
        console.log(data);
      });
  };

  const createItem = (data) => {
    localStorage.setItem("userData", JSON.stringify(data?.user));
    localStorage.setItem("token", data?.token);
  };

  return (
    <div className="semua-component">
      <>
        <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>SURVEY DASBOARD</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <strong>Hasil Survei dari :</strong> 
            {user?.data?.map((item, index) => (
              <div key={index}>
                <FontAwesomeIcon icon={faUser} /> {" "} : {" "}
                <strong>{item.username}</strong>
              </div>
            ))}
          </Offcanvas.Body>
        </Offcanvas>

        <Container>
        <h1><strong>HASIL SURVEY</strong></h1>
          <div className="card-jenis">
            <div className="card-dua">
              {user.data?.map((item, index) => (
                <Card className="card-inti" key={index} style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FontAwesomeIcon icon={faUser} /> : {" "}
                      {item.username}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faEnvelope} /> : {" "}
                      {item.email}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faBuilding} /> : {" "}
                      {item.pekerjaan}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faGenderless} /> : {" "}
                      {item.gender}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faFlag} /> : {" "}
                      {item.languages}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </>
    </div>
  );
};

export default Dasboard;
