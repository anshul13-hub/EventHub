import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import StudentDashboard from "./pages/StudentDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import Ticket from "./pages/Ticket";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MyTickets from "./pages/MyTickets";
import CreateEvent from "./pages/CreateEvent";
import EventRegistrations from "./pages/EventRegistrations";
import EditEvent from "./pages/EditEvent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/events" element={<Events />} />

      <Route path="/event/:id" element={<EventDetails />} />

      <Route path="/student/dashboard" element={<StudentDashboard />} />

      <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />

      <Route path="/ticket/:id" element={<Ticket />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
      <Route
  path="/my-tickets"
  element={<MyTickets />}
/>
<Route
  path="/create-event"
  element={<CreateEvent />}
/>
<Route
  path="/organizer/event/:id"
  element={<EventRegistrations />}
/>
<Route
  path="/edit-event/:id"
  element={<EditEvent />}
/>
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/gallery" element={<Gallery />} />
  
    </Routes>
  );
}

export default App;