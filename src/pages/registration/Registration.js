import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img from "./media/img.png";
import logo from "../head-foot/media/NOGOMETNI.png";

const Registration = () => {
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-auto">
      <div className=" w-3/4 lg:w-3/5 bg-white p-10 rounded-lg shadow-md flex justify-center items-center">
        <div className="md:flex-1">
          <img className="w-0 md:w-full" src={logo} />
        </div>
        <div className=" flex flex-1 flex-col justify-center items-center space-y-5">
          <span className=" text-primary-0 font-teachers font-semibold text-xl mb-10 uppercase">
            Registracija
          </span>
          <div className=" rounded-full relative">
            <img className="w-32" src={img} alt="Logo" />
            <button className="absolute w-10 h-10 rounded-full bg-primary-0 bottom-0 right-0 ease-in-out duration-300 delay-100 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
                className=" text-white"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 176v160M336 256H176"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-col items-center">
            <div className=" flex flex-col font-teachers space-y-5 w-80">
              <div className="flex justify-between">
                <span className=" text-slate-400 text-lg">Ime:</span>
                <input className=" border-b border-x border-primary-0"></input>
              </div>
              <div className=" flex justify-between items-center  ">
                <span className=" text-slate-400 text-lg">Prezime:</span>
                <input className=" border-b border-x border-primary-0"></input>
              </div>
              <div className=" flex justify-between items-center">
                <span className=" text-slate-400 text-lg ">Datum rođenja:</span>
                <DatePicker
                  selected={birthdate}
                  onChange={(date) => setBirthdate(date)}
                  dateFormat="dd.MM.yyyy"
                />
              </div>
              <div className=" flex justify-between items-center">
                <span className=" text-slate-400 text-lg">Spol:</span>
                <div>
                  <label className=" mr-10">
                    <input
                      className="mr-2"
                      type="radio"
                      name="gender"
                      value="muški"
                      checked={gender === "muški"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Muški
                  </label>
                  <label>
                    <input
                      className="mr-2"
                      type="radio"
                      name="gender"
                      value="ženski"
                      checked={gender === "ženski"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Ženski
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="px-5 py-2 bg-primary-0 rounded-md shadow-md text-white font-teachers font-thin text-lg ease-in-out duration-300 delay-100 hover:scale-110">
              Registracija
            </button>
          </div>
          <div>
            <span className=" text-sm font-thin text-slate-400">
              ili registracija putem:
            </span>
          </div>
          <div className=" flex flex-col space-y-2">
            <button className=" flex justify-center items-center px-24 py-2 bg-green-300 border-2 border-green-500 rounded-lg shadow-md space-x-3 ease-in-out duration-300 delay-100 hover:scale-110">
              <svg
                className="w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="white"
              >
                <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
              </svg>
              <p className=" text-slate-400 font-semibold">Google</p>
            </button>
            <button className=" flex justify-center items-center bg-blue-300 px-24 py-2 space-x-3 rounded-lg shadow-md border-2 border-blue-500 ease-in-out duration-300 delay-100 hover:scale-110">
              <svg
                className="w-7"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 509 507.14"
              >
                <path
                  fill-rule="nonzero"
                  d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"
                />
              </svg>
              <p className=" text-slate-400 font-semibold">Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
