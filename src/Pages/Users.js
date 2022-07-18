import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Table, Accordion } from "react-bootstrap";

export default function TableComponents() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // GET DATA FROM API BY ID
  const viewData = (id) => {
    axios.get(`http://localhost:5000/users/api/search/${id}`).then((res) => {
      console.table(res.data);
    });
  };

  // GET ALL DATA FROM API
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/users/api/`);
    setusers(response.data);
  };

  // Search from API BY SEARCH localhost:5000
  let cancelToken;
  const onType = async (e) => {
    const search = e.target.value;

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Canceled the preveus req");
    }

    cancelToken = axios.CancelToken.source();
    const response = await axios.get(
      `http://localhost:5000/users/api/search/${search}`,
      { cancelToken: cancelToken.token }
    );
    // console.table(response.data.username)
    console.table(response.data);
  };
  const [field, setField] = useState({
    username: "",
    email: "",
    password: "",
    role_id: "",
  });
  return (
    <div className="container">
      <Accordion defaultActiveKey="0" className="my-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Data Users</Accordion.Header>
          <Accordion.Body>
            Selamat Datang di Halaman Data Users <br />
            Untuk mencari data, silahkan masukkan id dan check di console<br />
            <input
              className="mt-5"
              type="text"
              placeholder="Search"
              onChange={onType}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="Container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <Table className="text-center" striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button
                        type="button"
                        size="sm"
                        className="btn"
                        variant="primary"
                        onClick={() => viewData(user.id)}
                      >
                        View
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        size="sm"
                        className="btn"
                        variant="warning"
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        size="sm"
                        className="btn"
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
