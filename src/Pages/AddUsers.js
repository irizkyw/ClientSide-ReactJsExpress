import React, { Component } from 'react';
import { Form } from "reactstrap";

export default class AddUsers extends Component {
  render() {
    return (
      <div>
        <h1>Tambah data brow</h1>
        <Form>
          <label>Username</label>
          <input type="text" name="username"></input>
          <label>Email</label>
          <input type="text" name="email"></input>
          <label>Password</label>
          <input type="text" name="password"></input>
          <label>Roles_id</label>
          <input type="text" name="roles_id"></input>
          <button type="submit" name="submit">
            Tambahkan
          </button>
        </Form>
      </div>
    );
  }
}
