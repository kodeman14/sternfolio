import React from "react";

function AboutMe({ jsonData }) {
  console.log(jsonData.aboutMe);
  return (
    <section id="about" className="flex-row bg-zinc-600 text-cyan-500">
      {/* <div>
        <img
          className="profile-pic"
          src="../public/img/profile-pic.jpg"
          alt=""
        />
      </div> */}

      <div className="flex flex-col text-left py-10 m-auto w-1/2">
        <span className="text-2xl font-bold">About Me</span>
        <p>{jsonData.aboutMe.description}</p>
        {/* <h2>Interests</h2>
        <p>{jsonData.aboutMe.interests}</p>
        <h2>Knowledge</h2>
        <p>{jsonData.aboutMe.knowledge}</p> */}
      </div>
    </section>
  );
}

export default AboutMe;

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
