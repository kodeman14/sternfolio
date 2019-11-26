import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="img/profile-pic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutMe}</p>

            {/*<div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.personal.address}</span>
                  <br></br>
                  <span>{resumeData.personal.phone}</span>
                  <br></br>
                  <a>{resumeData.personal.website}</a>
                </p>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    );
  }
}
