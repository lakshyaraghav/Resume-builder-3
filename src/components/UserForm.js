import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserForm = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    city: "",
    desc: "",
    phone: "",
    education: "",
    achievements: "",
    experience: "",
    experiencedesc: "",
    achievementdate: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/details",
      state,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Resume Form</h1>
      <Form className="register-form" onSubmit={handleOnSubmit}>

      <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter desc"
            name="desc"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="education">
          <Form.Label>Education</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter education"
            name="education"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter experience"
            name="experience"
            onChange={handleInputChange}
          />
          </Form.Group>
          {/* <Form.Group controlId="experiencedesc">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter experiencedesc"
            name="experiencedesc"
            onChange={handleInputChange}
          />
          </Form.Group> */}

          <Form.Group controlId="achievements">
          <Form.Label>Achievements</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter achievements"
            name="achievements"
            onChange={handleInputChange}
          />
          </Form.Group>

          {/* <Form.Group controlId="achievementdate">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="achievementdate"
            name="achievementdate"
            onChange={handleInputChange}
          />
          </Form.Group> */}

        
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            name="address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Link to="/home" state={state}>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Link>
        <Link to="/education">link</Link>
      </Form>
    </div>
  );
};

export default UserForm;
