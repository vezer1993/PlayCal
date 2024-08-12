import React from "react";
import logo from "./media/NOGOMETNI.png";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className=" flex w-screen h-screen items-center justify-center">
      <div className=" flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-8">
        <div className="w-52">
          <img src={logo} />
        </div>
        <div className=" space-y-5">
          <div className=" flex flex-col space-y-2">
            <span className=" text-slate-400">Korisničko ime:</span>
            <input className="border-x border-b border-primary-0"></input>
          </div>
          <div className=" flex flex-col space-y-2">
            <span className=" text-slate-400">Lozinka:</span>
            <input className="border-x border-b border-primary-0"></input>
            <button className=" text-xs text-slate-400 hover:text-primary-0">
              Zaboravili ste lozinku?
            </button>
          </div>
        </div>
        <button className=" mt-7 py-3 px-10 bg-primary-0 rounded-lg shadow-md text-white font-semibold ease-in-out duration-300 delay-100 hover:scale-110">
          Prijava
        </button>
        <div className="mt-5 text-sm font-thin flex">
          <p className=" text-slate-400 mr-2">Nemate račun?</p>
          <Link to="/registration">
            <button className="hover:text-teal-400"> Registritajte se!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
