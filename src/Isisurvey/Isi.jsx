import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Isi.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../src/App/features/Login/Actions";
import swal from "sweetalert";
import logo from "../Landing/TEAM SURVEI.png";

const Buat = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    pekerjaan: "",
    gender: "",
    languages: ["html"],
  });
  
  const goToDashboard = () => {
    dispatch(setUserData(user));
    navigate("/Dashboard");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // masuk database
  const fetchSurvei = () => {
    const payload = {...user}
    payload.languages = payload.languages.join (",")
    fetch(`https://sore-tan-calf-garb.cyclic.app/api/isi-survei`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": 'application/json;charset=utf-8' },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setUserData({ user: data?.user, token: data?.token }));
        
        createItem(data);
        console.log(data);
      });
  };

  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "languages") {
      let copy = { ...user };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(
          (el) => el !== event.target.value
        );
      }

      setUser(copy);
    } else {
      setUser(() => ({
        ...user,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    fetchSurvei();
    console.log(user);
    swal("Jawaban anda telah direkam", "success");
  };

  const createItem = (data) => {
    localStorage.setItem("userData", JSON.stringify(data?.user));
    localStorage.setItem("token", data?.token);
  };

  return (
    <>
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
            <Nav className="me-auto">
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Container>
      <div>
        <h1>ISI SURVEY BERIKUT</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              name="username"
              onChange={onChangeHandler}
              value={user.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              name="email"
              onChange={onChangeHandler}
              value={user.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pekerjaan" className="form-label">
              pekerjaan
            </label>
            <select
              className="form-select"
              name="pekerjaan"
              onChange={onChangeHandler}
              value={user.pekerjaan}
            >
              <option value="student">Student</option>
              <option value="employee">Employee</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={onChangeHandler}
                  checked={user.gender === "male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={onChangeHandler}
                  checked={user.gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={onChangeHandler}
                  checked={user.gender === "other"}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Languages
            </label>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="languages"
                  value="html"
                  onChange={onChangeHandler}
                  checked={user.languages.indexOf("html") !== -1}
                />
                <label htmlFor="html">HTML</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="languages"
                  value="css"
                  onChange={onChangeHandler}
                  checked={user.languages.indexOf("css") !== -1}
                />
                <label htmlFor="css">CSS</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="languages"
                  value="javascript"
                  onChange={onChangeHandler}
                  checked={user.languages.indexOf("javascript") !== -1}
                />
                <label htmlFor="javascript">Javascript</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <Button
              className="btn"
              type="submit"
            >
              Submit
            </Button>
            <Button
              onClick={() => goToDashboard()}
              className="btn-dashboard"
              type="submit"
            >
              Dashboard
            </Button>
          </div>
        </form>
      </div>
    </Container>
    </>
  );
};

export default Buat;



