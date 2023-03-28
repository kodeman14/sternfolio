import React, { Component } from "react";
export default class About extends Component {
  render() {
    let jsonData = this.props.jsonData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="img/profile-pic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{jsonData.aboutMe.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="three columns"></div>
          <div className="nine columns">
            <h2>Interests</h2>
            <p>{jsonData.aboutMe.interests}</p>
          </div>
        </div>
      </section>
    );
  }
}

// <div className="row">
//   <div className="columns contact-details">
//     <h2>Contact Details</h2>
//     <p className="address">
//       <span>{jsonData.personal.address}</span>
//       <br></br>
//       <span>{jsonData.personal.phone}</span>
//       <br></br>
//       <a>{jsonData.personal.website}</a>
//     </p>
//   </div>
// </div>
