import React from "react";

const NavMenu = ({ allSiteData }) => {
  return (
    <div className="flex flex-row sticky justify-around bg-slate-700">
      <span className="text-left text-white text-5xl font-serif">
        {allSiteData.fullName}
      </span>
      <div className="sticky text-green-500 text-center">
        <ul className="grid grid-cols-5 gap-8">
          {allSiteData.navmenu.map((item, i) => (
            <li key={i}>
              <a className="" href={item.href}>
                {item.name}
              </a>
            </li>
            // <li>
            // 	<a className='smoothscroll' href='#about'>
            // 		About
            // 	</a>
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
