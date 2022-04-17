import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/heros">heros</Link>
        </li>
        <li>
          <Link to="/villians">villians</Link>
        </li>
        <li>
          <Link to="/cities">cities</Link>
        </li>
        <li>
          <Link to="/heros/new">add a hero</Link>
        </li>
      </ul>
    </div>
  );
};
