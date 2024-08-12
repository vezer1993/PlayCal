import React from "react";
import logo from "../../../src/pages/head-foot/media/NOGOMETNI.png";
import { Link } from "react-router-dom";
const Res_Heading = () => {
  return (
    <div className="flex bg-white rounded-md mb-2 justify-between items-center shadow-md w-full px-10">
      <img className="w-32" src={logo} />
      <Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Res_Heading;
