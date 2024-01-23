import React from "react";
import Theme from "./theme";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 min-w-72">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Tyler | Log Monitor</a>
      </div>
      <Theme />
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://avatars.githubusercontent.com/u/101559620?v=4"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="https://github.com/tylerbert31">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tyler-bert-baring-156464270/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tylerbert31/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
