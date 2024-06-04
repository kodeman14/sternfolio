import React from "react";
import Socials from "../connect/Socials";
import NavMenu from "./NavMenu";

function Header({ jsonData, allSiteData }) {
  return (
    <>
      <header id="header" className="text-3xl relative">
        <div
          id="background"
          className="h-screen max-h-[60vh] bg-contain bg-no-repeat bg-center blur-sm"
        />
        {/* <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show menu">
            Show menu
          </a>
          <a className="mobile-btn" href="/#" title="Hide menu">
            Hide menu
          </a>
        </nav> */}
        <section className="absolute w-full top-0 left-1/2 -translate-x-1/2">
          {/* className="absolute top-0 left-1/2 w-1/2 -translate-x-1/2"> */}
          <NavMenu allSiteData={allSiteData} />
        </section>
        <section className="absolute bottom-0 left-1/2 text-center w-1/2 -translate-x-1/2">
          {/* <h1
						className='responsive-headline'
						style={{ color: 'red', fontFamily: 'sans-serif ' }}>
						{jsonData.name}
					</h1> */}

          <br />

          <div className="flex flex-col">
            {/* TODO : make typewriter here with rainbow */}
            <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              {jsonData.headerJob}
            </span>
            <span className="text-black text-center">
              {jsonData.roleDescription}
            </span>

            {/* <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                {jsonData.headerJob}
              </span>
              <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-red-900 w-full animate-type will-change`}"></span>
            </span> */}
          </div>

          <hr className="border-black border-4 mt-5" />
          <br />
          <Socials socialMedia={jsonData.socialMedia} />
        </section>
      </header>
    </>
  );
}

// <p className="scrolldown">
// <a className="smoothscroll" href="#about">
//   <i className="icon-down-circle"></i>
// </a>
// </p>

export default Header;
