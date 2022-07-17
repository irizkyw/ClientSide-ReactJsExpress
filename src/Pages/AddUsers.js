import React from "react";
import { Table, Button, Form, Modal, ButtonGroup } from "react-bootstrap";

export default function AddUsers() {
  return (
    <div className="container text-start">
      <h1 className="title my-5">Tambah data</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRoles">
          <Form.Label>Roles_id</Form.Label>
          <Form.Control type="text" placeholder="ID ROLES 1/0" />
        </Form.Group>
        <Button type="submit" name="submit" className="btn" variant="primary">Tambahkan</Button>
      </Form>
    </div>
  );
}
