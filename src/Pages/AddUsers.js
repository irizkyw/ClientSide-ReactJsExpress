import React, { useState } from "react";
import axios from "axios";
import { Table, Button, Form, Modal, ButtonGroup } from "react-bootstrap";

export default function AddUsers() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    role_id: "",
  });
  const addHandler = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    setData({ ...data, [fieldName]: fieldValue });
    console.log(data);
  };

  const addUser = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role_id: e.target.role_id.value,
    };
    axios
      .post("http://localhost:8000/api/users/insert", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container text-start">
      <h1 className="title my-5">Tambah data</h1>
      <Form method="POST">
        <Form.Group
          className="mb-3"
          name="username"
          controlId="formGroupUsername"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={addHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" name="email" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={addHandler}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          name="password"
          controlId="formGroupPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={addHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" name="roles_id" controlId="formGroupRoles">
          <Form.Label>Roles_id</Form.Label>
          <Form.Control
            type="text"
            placeholder="ID ROLES 1/0"
            onChange={addHandler}
          />
        </Form.Group>
        <Button
          type="submit"
          name="submit"
          className="btn"
          variant="primary"
          onClick={addHandler}
        >
          Tambah
        </Button>
      </Form>
    </div>
  );
}
