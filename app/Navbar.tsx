import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-title z-auto">
        FallenBrick
      </Link>

      <div className="navbar-mobile">
        <nav>
          <ul>
            <li>
              <Link to="/sobre">sobre</Link>
            </li>
            <li>
              <Link to="/projetos">projetos</Link>
            </li>
            <li>
              <Link to="/musicas">músicas</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar-links">
        <nav>
          <ul>
            <li>
              <Link to="/sobre">sobre</Link>
            </li>
            <li>
              <Link to="/projetos">projetos</Link>
            </li>
            <li>
              <Link to="/musicas">músicas</Link>
            </li>
            {/* shhh */
            /*<Link to="/tlo">tlo</Link>*/}
          </ul>
        </nav>
      </div>
    </header>
  );
}
