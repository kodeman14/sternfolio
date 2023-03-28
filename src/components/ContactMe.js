import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let jsonData = this.props.jsonData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h2>Contact Details</h2>
            <p className="lead">
              Feel free to contact me for any work or suggestions below!
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email: {jsonData.details.emailAddress}</h4>
              <h4>Website: {jsonData.details.website}</h4>
            </div>
          </aside>
        </div>
        <br></br>
        <div className="row">
          <div className="columns contact-details">
            <span className="address">
              <h4>Address: {jsonData.details.address}</h4>
              {/* <h4>Phone: {jsonData.details.phone || 'N/A'}</h4> */}
            </span>
          </div>
        </div>
      </section>
    );
  }
}
