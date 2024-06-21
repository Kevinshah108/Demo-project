import React from "react";
import "./Homepage.css";
import "./App.css";
import "./Script1";
import { useFormik } from "formik";
// import Register from "./Register.jsx";

function Homepage1() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNo: "",
      email: "",
      purpose: "",
      meet: "",
      date: "",
      time: "",
      address: "",
    },
    onsubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="homepage-container">
        <article className="main-div">
          <h1 className="dashboard-text">Dashboard</h1>
          <h1 className="toggle-home-dashboard">
            <span className="home-btn">Home</span> /{" "}
            <span className="dashboard-btn">Dashboard</span>
          </h1>
        </article>

        <div className="searchDiv">
          <h5 className="head">Search by Visitor name & mobile number</h5>
          <p className="para">Search by Visitor name & mobile number.</p>
          <input
            type="search"
            className="searchBar"
            placeholder="Enter name & number"
          />
          <input type="submit" className="submit" />
        </div>

        <aside className="homepage-aside">
          <div className="my-asides">
            <button className="aside-button" id="dashboard">
              Dashboard
            </button>
            <button className="aside-button">Add Visitors</button>
            <button className="aside-button">Manage Visitors</button>
            <button className="aside-button">Visitors Search</button>
            <button className="aside-button">Visitors B/W Dates</button>
            <button className="aside-button">Change Password</button>
            <button className="aside-button">Log Out</button>
          </div>
        </aside>

        <form onSubmit={formik.handleSubmit}>
          <div className="main">
            <div className="formbg">
              <input
                type="text"
                className="firstName"
                id="firstName"
                placeholder="First Name"
                required
                onChange={formik.handleChange}
                value={formik.values.firstName}
              ></input>
              {formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
              <input
                type="text"
                className="lastName"
                id="lastName"
                placeholder="Last Name"
                required
                onChange={formik.handleChange}
                value={formik.values.lastName}
              ></input>
              {formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
              <input
                type="tel"
                className="phoneNo"
                id="phoneNo"
                placeholder="Contact No:"
                required
                onChange={formik.handleChange}
                value={formik.values.phoneNo}
              ></input>
              {formik.errors.phoneNo ? (
                <div>{formik.errors.phoneNo}</div>
              ) : null}
              <input
                type="email"
                className="email"
                id="email"
                placeholder="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
              ></input>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <input
                type="text"
                className="purpose"
                id="purpose"
                placeholder="Purpose"
                required
                onChange={formik.handleChange}
                value={formik.values.purpose}
              ></input>
              {formik.errors.purpose ? (
                <div>{formik.errors.purpose}</div>
              ) : null}
              <input
                type="text"
                className="meet"
                id="meet"
                placeholder="whom you want to meet?"
                required
                onChange={formik.handleChange}
                value={formik.values.meet}
              ></input>
              {formik.errors.meet ? <div>{formik.errors.meet}</div> : null}
              <input
                type="date"
                className="date"
                id="date"
                placeholder="Date:"
                required
                onChange={formik.handleChange}
                value={formik.values.date}
              ></input>
              {formik.errors.date ? <div>{formik.errors.date}</div> : null}
              <input
                type="time"
                className="time"
                id="time"
                placeholder="In/Out Time:"
                required
                onChange={formik.handleChange}
                value={formik.values.time}
              ></input>
              {formik.errors.time ? <div>{formik.errors.time}</div> : null}
              <input
                type="address"
                className="address"
                id="address"
                placeholder="Address:"
                required
                onChange={formik.handleChange}
                value={formik.values.address}
              ></input>
              {formik.errors.address ? (
                <div>{formik.errors.address}</div>
              ) : null}

              <input type="Submit" className="clickbtn" id="clickbtn"></input>
            </div>
          </div>
        </form>

        <header className="homepage-header">
          <img
            onClick={() => logIn()}
            className="profile-header-img"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <div className="profile">
            <div className="first">
              <a>Log Out</a>
            </div>
            <a>Change Password</a>
          </div>
        </header>
      </div>
    </>
  );
}
export default Homepage1;
