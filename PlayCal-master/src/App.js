import "./App.css";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Pitches from "./pages/player/home/pitches/Pitches";
import Reservation from "./reservation/Reservation";
import Gool from "./pages/player/home/pitches/components/Tereni Gool Šubićevac/Gool";
import Bilice from "./pages/player/home/pitches/components/Tereni Bilice/Bilice";
import Mandalina from "./pages/player/home/pitches/components/Tereni Mandalina/Mandalina";
import Njivice from "./pages/player/home/pitches/components/Tereni Njivice/Njivice";
import Rasadnik from "./pages/player/home/pitches/components/Tereni Rasadnik Vidici/Rasadnik";
function App() {
  return (
    <div className=" bg-slate-200 p-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/pitches" element={<Pitches />} />
          <Route path="/gool" element={<Gool />} />
          <Route path="/bilice" element={<Bilice />} />
          <Route path="/mandalina" element={<Mandalina />} />
          <Route path="/njivice" element={<Njivice />} />
          <Route path="/rasadnik" element={<Rasadnik />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
