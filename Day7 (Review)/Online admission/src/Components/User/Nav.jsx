import React, { useState } from 'react';

function Nav() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <nav
        className={`bg-white p-4 ${isHovered ? 'w-32' : 'w-20'} transition-width duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className="flex flex-col space-x-4">
          <li className={`flex flex-col space-x-4 ${!isHovered && "hidden"} `}>
            Home
          </li>
          <li className={`flex flex-col space-x-4 ${!isHovered && "hidden"} `}>
            About
          </li>
          <li className={`flex flex-col space-x-4 ${!isHovered && "hidden"} `}>
            Contact
          </li>
        </ul>
      </nav>
    );
}

export default Nav;

