import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "220px" }}>
      <h2>Banking App</h2>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/customers">Customers</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;