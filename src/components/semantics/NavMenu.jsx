import React from "react";

function NavMenu({ allSiteData }) {
  return (
    <ul className="sticky grid justify-center grid-cols-6 text-green-500">
      {allSiteData.navmenu &&
        allSiteData.navmenu.map((item, i) => (
          <li key={i}>
            <a className="" href={item.href}>
              {item.item}
            </a>
          </li>
          // <li>
          // 	<a className='smoothscroll' href='#about'>
          // 		About
          // 	</a>
          // </li>
        ))}
    </ul>
  );
}

export default NavMenu;
