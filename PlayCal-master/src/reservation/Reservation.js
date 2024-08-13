import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Croatian } from "flatpickr/dist/l10n/hr";
import Res_Heading from "./components/Res_Heading";
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path if necessary

const Reservation = () => {
  const location = useLocation();
  const [date, setDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [reservations, setReservations] = useState([]); // State to store fetched reservations

  const field = location.state?.field || {
    heading: "Nepoznati tereni",
    name: "Nepoznati teren",
    price: "0€",
    description: "Opis nije dostupan",
    image: {},
  };

  const availableSlots = [
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
  ];

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("hr-HR", options).format(date);
  };

  const getSelectedInfo = () => {
    if (date && selectedSlot) {
      return `${formatDate(date[0])}, u  ${selectedSlot}h`;
    }
    return "Odaberite datum i termin.";
  };

  /* IZVADIT IZ BAZE */
  /* Fetching reservations on component mount */
  useEffect(() => {
    const fetchReservations = async () => {
      const q = query(collection(db, "reservations"));
      const querySnapshot = await getDocs(q);
      const fetchedReservations = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReservations(fetchedReservations);

      // Log reservations to console
      console.log("Fetched Reservations:", fetchedReservations);
    };

    fetchReservations();
  }, []);

  const isSlotReserved = (slot) => {
    if (!date) return false;

    // Convert the selected date to the ISO string format (without the time part)
    const selectedDateISO = date[0].toISOString().split("T")[0];

    // Check if any reservation matches the selected date, slot, and field
    return reservations.some(reservation => {
        const reservationDateISO = reservation.date.split("T")[0];
        return (
            reservationDateISO === selectedDateISO && 
            reservation.slot === slot &&
            reservation.field.name === field.name &&  // Match field name
            reservation.field.heading === field.heading  // Match field heading
        );
    });
};

/* IZVADIT IZ BAZE */


 /* DODAT U BAZU */
  const handleReservation = async () => {
    if (!date || !selectedSlot) {
      alert("Please select a date and time slot.");
      return;
    }

    if (isSlotReserved(selectedSlot)) {
      alert("This timeslot is already reserved. Please choose another one.");
      return;
    }

    const reservationData = {
      field: field,
      date: date[0].toISOString(),  // Use ISO format for date storage
      slot: selectedSlot,
      price: field.price,
    };

    try {
      const docRef = await addDoc(collection(db, "reservations"), reservationData);
      alert("Reservation successful! Reservation ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding reservation: ", e);
      alert("Failed to make reservation. Please try again.");
    }
  };

  /* DODAT U BAZU */

  return (
    <div>
      <Res_Heading />
      <div className="relative bg-white rounded-xl shadow-m h-full w-full flex flex-col items-center justify-center font-teachers p-10">
        <div className=" bg-slate-600 p-10 rounded-md shadow-lg flex flex-col items-center mb-10">
          <h1 className="text-white text-4xl font-semibold mb-5 flex">
            {field.heading}
          </h1>
          <img
            className="w-full h-52 border rounded-md mb-2"
            src={field.image}
            alt={field.name}
          />
          <h2 className="text-white text-lg font-semibold">{field.name}</h2>
          <p className="text-xs text-white">{field.description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center space-y-5 md:space-y-0 md:space-x-10">
          <div>
            <Flatpickr
              value={date}
              onChange={(date) => setDate(date)}
              options={{
                inline: true,
                dateFormat: "d.m.Y.",
                minDate: "today",
                locale: Croatian,
                weekNumbers: false,
                disableMobile: true,
              }}
              className="w-full md:w-80 p-3 border rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Dostupni termini:</h2>
            <ul className="space-y-2">
              {availableSlots.map((slot, index) => {
                const reserved = isSlotReserved(slot);
                return (
                  <li
                    key={index}
                    className={`flex justify-center p-2 border rounded-lg shadow-sm cursor-pointer 
                      ${reserved ? "bg-gray-300 text-gray-500 cursor-not-allowed" : ""}
                      ${selectedSlot === slot && !reserved ? "bg-primary-0 text-white" : "hover:bg-slate-400 hover:text-white"}`}
                    onClick={() => !reserved && setSelectedSlot(slot)}
                  >
                    {slot} {reserved ? "(Zauzeto)" : ""}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" space-x-20 flex items-center justify-around mt-10 border border-primary-0 p-10 rounded-lg shadow-md bg-slate-100 mb-5">
          <div>
            <p>{field.heading}</p>
            <p>{field.name}</p>
            <p className=" text-2xl font-semibold">{getSelectedInfo()}</p>
            <p>Cijena termina: {field.price}</p>
          </div>
          <button 
            onClick={handleReservation}
            className="bg-primary-0 py-2 px-7 text-white font-semibold shadow-md rounded-lg ease-in-out duration-300 delay-100 hover:scale-110">
            Rezerviraj
          </button>
        </div>
        <Link className="absolute bottom-5 left-10" to="/pitches">
          <button className=" flex items-center text-xs text-slate-400 hover:text-red-400 mt-7">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M328 112L184 256l144 144"
              />
            </svg>
            Natrag
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reservation;