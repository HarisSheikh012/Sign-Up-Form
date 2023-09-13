import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: ""
  })
  const { name, email, password, phone_no } = data;

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    await axios.post("http://localhost:3001/user", data)
      .then(response => {
        setData({
          name: "",
          email: "",
          password: "",
          phone_no: ""
        })
        console.log("response", response)
      })
      .catch(error =>
        console.log("error", error)
      );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='mt-5'>
          <code>Sign Up Form, save data in Database.</code>
        </p>
        <a
          className="App-link"
          href=""
          target=""
          rel="noopener noreferrer"
        >
          Learn Nest Js
        </a>
        <div className="row" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <div className='col-lg-3'>
            <form>
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <small>Your Name</small>
                <input
                  style={{ marginLeft: "5px" }}
                  type="text"
                  name="name"
                  value={name}
                  required
                  className="form-control"
                  placeholder="Your Name"
                  onChange={handleInput}
                />
                <small>Your Email</small>
                <input
                  style={{ marginLeft: "5px" }}
                  type="email"
                  required
                  value={email}
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  onChange={handleInput}
                />
                <small>Password</small>
                <input
                  style={{ marginLeft: "5px" }}
                  type="password"
                  required
                  name="password"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  onChange={handleInput}
                />
                <small>Phone No</small>
                <input
                  style={{ marginLeft: "5px" }}
                  type="number"
                  required
                  value={phone_no}
                  name="phone_no"
                  className="form-control"
                  autoComplete="off"
                  onChange={handleInput}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "#61dafb",
                    marginTop: "15px",
                    border: "1px solid #61dafb",
                    borderRadius: "10px"
                  }}
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
