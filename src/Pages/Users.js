import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function TableComponents() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // GET DATA FROM API BY ID
  const viewData = (id) => {
    axios.get(`http://localhost:5000/users/api/${id}`).then((res) => {
      console.log(res.data);
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
      `http://localhost:5000/users/api/${search}`,
      {cancelToken: cancelToken.token}
    );
    // console.log(response.data.username)
    console.table(response.data)
  };
  return (
    <div className="container">
      <h1>DATA User</h1>
      {users.map((user) => (
        <div key={user.id}>
          {/* link button */}
          {/* <Link to={`/users/${user.id}`}> */}
          <button type="button" onClick={() => viewData(user.id)}>
            {user.username}
          </button>
          {/* </Link> */}
        </div>
      ))}
      <h1>Search User By ID</h1>
      <input type="text" placeholder="Search" onChange  ={onType} />
    </div>
  );
}
