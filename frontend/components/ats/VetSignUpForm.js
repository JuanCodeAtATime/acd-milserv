import React, { useState } from "react";
import { API } from "../../config";
import Axios from "axios";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Router from "next/router";
// import dynamic from "next/dynamic";
// import { createBlog } from "../../actions/blog";
// import { withRouter } from "next/router";

// import "./styles.css";

const Affiliation = [
  { key: 1, value: "Veteran" },
  { key: 2, value: "Military Spouse/Relative" },
  { key: 3, value: "Civilian" },
];

const Interest = [
  { key: 1, value: "Job" },
  { key: 2, value: "Franchise Ownership" },
  { key: 3, value: "Investing in MilServ ACD Corp." },
  { key: 4, value: "News/Update" },
];

function VetSignUpForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [milAffiliation, setMilAff] = useState(1);
  const [careerInterest, setCareerInterest] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const affiliationSelectChange = (event) => {
    setMilAff(event.currentTarget.value);
  };

  const interestSelectChange = (event) => {
    setCareerInterest(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      milAffiliation,
      careerInterest,
      additionalInfo,
    };

    Axios.post(`${API}/veteran`, formData).then((response) => {
      if (response.data.success) {
        alert(formData + " Successfully submitted.");
        props.history.push("/");
      } else {
        alert("Sorry.  Failed to submit form");
      }
    });
  };

  return (
    <div className="auth-box">
      <form onSubmit={onSubmit}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />

        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <label>Select Military Affiliation </label>
        <select onChange={affiliationSelectChange}>
          {Affiliation.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>

        <label>Tell Us What You're Interested In </label>
        <select onChange={interestSelectChange}>
          {Interest.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />

        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          placeholder="Tell Us More!"
          type="text"
          name="additionalInfo"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default VetSignUpForm;
