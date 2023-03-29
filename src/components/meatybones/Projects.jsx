import React from "react";

function Projects({ jsonData }) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {jsonData.myworks &&
              jsonData.myworks.map((item, i) => {
                return (
                  // {/* <a href='#modal-01'>
                  // 	<div className='overlay'>
                  // 	</div>
                  // </a> */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <img
                        alt="img"
                        src={`${item.imgUrl}`}
                        className="item-img"
                      />
                      <div className="portfolio-item-meta" key={i}>
                        <a
                          key={i}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 key={i}>{item.name}</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
