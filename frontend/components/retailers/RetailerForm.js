//Need to change API address for axios call
//Need to create new schema for Retailers
//Need to build multi-select options for dropdown menu
//Need to configure all routes
//Need to verify all savaeable data names

import React, { useState, PropTypes } from "react";
import { API } from "../../config";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import { withRouter } from "next/router";
import Router from "next/router";

const LicenseState = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const Interest = [
  { key: 1, value: "Job" },
  { key: 2, value: "Franchise Ownership" },
  { key: 3, value: "Investing in MilServ ACD Corp." },
  { key: 4, value: "News/Update" },
];

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

export default function RetSignUpForm(props) {
  const classes = useStyles();
  const [retFirstName, setRetFirstName] = useState("");
  const [retLastName, setRetLastName] = useState("");
  const [retEmail, setRetEmail] = useState("");
  const [licState, setLicState] = useState("");
  const [retPhoneNo, setRetPhoneNo] = useState("");
  const [stateLicNo, setStateLicNo] = useState("");
  const [coName, setCoName] = useState("");
  const [retAdditionalInfo, setRetAdditionalInfo] = useState("");

  const licStateSelectChange = (event) => {
    setLicState(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      retFirstName,
      retLastName,
      retEmail,
      retPhoneNo,
      licState,
      stateLicNo,
      coName,
      retAdditionalInfo,
    };

    Axios.post(`${API}/veteran`, formData).then((response) => {
      if (response.data.success) {
        alert(formData + " Successfully submitted.");
        Router.replace("/");
      } else {
        alert("Sorry.  Failed to submit form");
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>
          <b
            style={{
              color: "#8d54b5",
            }}
          >
            RETAILER CONTACT FORM
          </b>
        </h2>

        <hr></hr>
        <div>
          <label
            style={{
              marginTop: "20px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
            }}
          >
            Company Name of DBA (if applicable){" "}
          </label>
          <input
            style={{ borderRadius: 5, marginLeft: 5, marginRight: 3 }}
            value={coName}
            onChange={(e) => setCoName(e.target.value)}
            placeholder="Company Name"
            type="text"
            name="coName"
            required
          />
        </div>
        <hr></hr>
        <div>
          <label
            style={{
              marginTop: "20px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
              width: "100%",
            }}
          >
            Contact Information{" "}
          </label>
          <input
            style={{ borderRadius: 5, marginLeft: 5, marginRight: 3 }}
            value={retFirstName}
            onChange={(e) => setRetFirstName(e.target.value)}
            placeholder="First name"
            type="text"
            name="First Name"
            required
          />

          <input
            style={{ borderRadius: 5 }}
            value={retLastName}
            onChange={(e) => setRetLastName(e.target.value)}
            placeholder="Last name"
            type="text"
            name="Last Name"
            required
          />

          <input
            style={{ borderRadius: 5, margin: 5 }}
            value={retEmail}
            onChange={(e) => setRetEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <label
            style={{
              marginTop: "10px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
              width: "100%",
            }}
          >
            Contact Number{" "}
          </label>
          <input
            style={{ borderRadius: 5, margin: 5 }}
            value={retPhoneNo}
            onChange={(e) => setRetPhoneNo(e.target.value)}
            placeholder="ex: 555-555-5555"
            type="text"
            name="retPhoneNumber"
            required
          />
        </div>
        <br></br>
        <hr></hr>

        <div>
          <label
            style={{
              marginTop: "20px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
            }}
          >
            State(s) Where You Possess Alchohol Licenses{" "}
          </label>
          <select
            style={{ borderRadius: 5, marginLeft: 3 }}
            className={classes.vetForm}
            onChange={licStateSelectChange}
          >
            {LicenseState.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}{" "}
              </option>
            ))}
          </select>
        </div>

        <label
          style={{
            marginTop: "20px",
            marginRight: 3,
            color: "black",
            fontWeight: "600",
            fontSize: ".90rem",
          }}
        >
          State License Number{" "}
        </label>
        <input
          style={{ borderRadius: 5, margin: 5 }}
          value={stateLicNo}
          onChange={(e) => setStateLicNo(e.target.value)}
          placeholder="State License Number"
          type="text"
          name="stateLicNumber"
          required
        />
        <br />
        <label
          style={{
            marginTop: "20px",
            marginRight: 3,
            color: "black",
            fontWeight: "600",
            fontSize: ".90rem",
          }}
        >
          Comment or Message{" "}
        </label>
        <textarea
          style={{ marginTop: "", width: "100%", height: 200, borderRadius: 5 }}
          value={retAdditionalInfo}
          onChange={(e) => setRetAdditionalInfo(e.target.value)}
          // placeholder="Tell Us More!"
          type="text"
          name="additionalInfo"
        />
        <br></br>
        <button
          type="submit"
          style={{ marginTop: 50 }}
          className="btn btn-warning"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
