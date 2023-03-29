import React from "react";
import { ICONS_MAP } from "../../data/enums";

function Socials({ socialMedia }) {
  const handleIcon = (name) => {
    const IconComponent = ICONS_MAP[name];
    return <IconComponent />;
  };

  return (
    <ul className="flex flex-row justify-around">
      {socialMedia.map((item, i) => (
        <li key={i} class="group flex relative">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {handleIcon(item.name)}
          </a>
          {/* hover tooltip added */}
          <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
