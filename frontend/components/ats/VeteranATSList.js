import React, { Component } from "react";
import { API } from "../../config";
import Moment from "react-moment";
import Axios from "axios";

// The ...props means, spread all of the passed props onto this element

// That way we don't have to define them all individually
export default class VeteranList extends Component {
  state = {
    veterans: [],
  };

  componentDidMount() {
    this.loadVetsList();
    // this.displayRecentNo();
  }

  loadVetsList = () => {
    Axios.get(`${API}/veterans`)
      .then(
        (res) =>
          this.setState(
            {
              veterans: res.data,
            },
            console.log("this is the data" + res.data)
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  //   deleteNumber = (id) => {
  //     const currentNumbers = this.state.numbers;
  //     API.deleteNumber(id)
  //       .then(
  //         (res) =>
  //           this.setState({
  //             numbers: currentNumbers.filter((number) => number._id !== id),
  //           }),
  //         this.loadNumbers()
  //       )
  //       .catch((err) => console.log(err));
  //   };

  render() {
    return (
      <div>
        {this.state.veterans.length ? (
          <div>
            {this.state.veterans
              .slice(0)
              .reverse()
              .map((vets) => (
                <ul>
                  <li style={{ border: "solid red 2px" }} key={vets._id}>
                    <strong style={{ fontFamily: "Quantico" }}>
                      <h4 style={{ color: "black" }}>
                        <b>:</b> {vets.lastName}
                        <span
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            borderRadius: "50%",
                            padding: "3px",
                            marginTop: "2px",
                          }}
                        >
                          {vets.firstName}
                        </span>
                      </h4>
                      <hr></hr>
                      <h6>
                        <b>Date: </b>
                        <Moment format="MM/DD/YYYY, h:mm a">{vets.date}</Moment>
                      </h6>
                    </strong>

                    <button onClick={() => this.deleteNumber(vets._id)} />
                  </li>
                </ul>
              ))}
          </div>
        ) : (
          <h3>No Applicants to Display :(</h3>
        )}
      </div>
    );
  }
}
