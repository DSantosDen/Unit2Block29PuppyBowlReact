// Importing the App.css stylesheet for styling the App component.
import "./App.css";

// Importing necessary components from react-router-dom for routing.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing the Detail page component.
import Detail from "./pages/Detail";

// Importing the Home page component.
import Home from "./pages/Home";

// Importing the NavBar component for navigation.
import NavBar from "./component/NavBar";

import NewPlayerForm from "./pages/CreatePlayer";

// The main function component of the application.
function App() {
  return (
    /* Wrapping the entire application in a BrowserRouter component.
    This enables the use of routing features provided by react-router-dom. */
    <BrowserRouter>
      {/* Rendering the NavBar component at the top of every page. */}
      <NavBar />
      {/* Defining routes for the application using the Routes component. */}
      {/* Each Route component specifies a path and the component to render when that path is matched. */}
      <Routes>
        {/* Route for the home page ("/"). Renders the Home component. */}
        <Route path="/" element={<Home />} />
        <Route path="/create-player" element={<NewPlayerForm />} />
        {/* Dynamic route for detail pages ("/:id"). Renders the Detail component. */}
        {/* The ":id" in the path is a URL parameter that will match any value and pass it to the Detail component. */}
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporting the App component so it can be imported and used in other parts of the application.
export default App;
