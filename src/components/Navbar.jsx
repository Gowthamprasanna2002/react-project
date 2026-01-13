import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px" }}>
      <Link to="/">Users</Link>
    </nav>
  );
}

export default Navbar;