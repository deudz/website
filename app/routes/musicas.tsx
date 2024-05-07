import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "FallenBrick" },
    { name: "description", content: "músicas da FallenBrick" },
  ];
};

export default function Musicas() {
  return (
    <div className="main-content">
      <h1>Músicas</h1>
      <p>Aqui estão algumas músicas que eu fiz.</p>
      <p>
        A maioria delas foi feitas no{" "}
        <Link to="https://beepbox.co/">Beepbox</Link> e algumas no{" "}
        <Link to="https://ultraabox.github.io/">Ultrabox</Link>
        <br />
        <Link to="https://www.youtube.com/watch?v=RAT-OY2Kg7g&list=PLom2XLd5AHsvAKUn2hlzNyWWkWNt8XFMm">
          Elas estão nessa playlist do Youtube
        </Link>
      </p>
    </div>
  );
}
