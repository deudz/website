import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <div className="navbar">
      <Link to="/" className="mr-auto ml-4 navbar-title z-auto">
        FallenBrick
      </Link>
      <nav className="ml-auto mr-4">
        <ul>
          <Link to="/sobre">sobre</Link>
          <Link to="/projetos">projetos</Link>
          <Link to="/musicas">músicas</Link>
          {/* shhh */
          /*<Link to="/tlo">tlo</Link>*/}
        </ul>
      </nav>
    </div>
  );
}
