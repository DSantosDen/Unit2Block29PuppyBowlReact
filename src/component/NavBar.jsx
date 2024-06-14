// Importing the Link component from react-router-dom for navigation.
import { Link } from "react-router-dom";

// Function component representing the navigation bar (NavBar).
function NavBar() {
  return (
    // A nav element that serves as the container for the navigation links.
    <nav className="navTitle">
      {/* A Link component that navigates to the home page ("/") when clicked. */}
      {/* The className "siteTitle" can be used to style this link specifically if needed. */}
      <Link to="/" className="siteTitle">
        Puppy Bowl
      </Link>

      {/* An unordered list (<ul>) containing list items (<li>) for each navigation option. */}
      <ul>
        {/* List item for creating a player. Contains a Link component that navigates to "/create-player". */}
        <li>
          <Link to="/create-player">Create Player</Link>
        </li>
      </ul>
    </nav>
  );
}

// Exporting the NavBar component so it can be imported and used in other parts of the application.
export default NavBar;
