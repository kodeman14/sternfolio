import React from "react";

function Footer({ jsonData, allSiteData }) {
  return (
    <footer
      id="footer"
      className="flex flex-row absolute bottom-0 left-1/2 text-center -translate-x-1/2"
    >
      <ul className="other-deets">
        {allSiteData.buildYear} &mdash; {allSiteData.fullName} &mdash;{" "}
        {allSiteData.techStack}
      </ul>
      {/* <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open" />
        </a>
      </div> */}
    </footer>
  );
}

export default Footer;
