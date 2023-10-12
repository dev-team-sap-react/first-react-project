import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rawdata">RawData</Link>
      </li>
      <li>
        <Link to="/evaluation">Evaluation</Link>
      </li>
    </ul>
  );
}
