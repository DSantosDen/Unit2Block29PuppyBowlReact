// Importing React library, which is essential for building the UI components.
import React from "react";

// Importing ReactDOM for rendering our React component tree into the DOM.
import ReactDOM from "react-dom/client";

// Importing the main application component from App.jsx.
import App from "./App.jsx";

// Importing global CSS styles defined in index.css.
import "./index.css";

/* Using ReactDOM.createRoot to create a root node for our React app.
This method is part of the new concurrent mode API introduced in React 18,
allowing for better performance and smoother user experiences during  development.*/
ReactDOM.createRoot(document.getElementById("root")).render(
  /* Wrapping the App component in React.StrictMode for development purposes.
StrictMode checks for potential problems in the app during development,
such as lifecycle method issues, unexpected side effects, etc. */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
