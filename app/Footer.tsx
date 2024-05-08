import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <ul>
        <li className="inline m-2">
          <Link
            className="text-gray-400 text-md hover:underline focus:underline"
            to="/privacidade"
          >
            privacidade
          </Link>
        </li>
        <li className="inline m-2">
          <Link
            className="text-gray-400 text-md hover:underline focus:underline"
            to="/contato"
          >
            contato
          </Link>
        </li>
      </ul>
    </footer>
  );
}
