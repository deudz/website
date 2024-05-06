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
        <Link
          className="underline hover:text-blue-400"
          to="https://beepbox.co/"
        >
          Beepbox
        </Link>{" "}
        e algumas no{" "}
        <Link
          className="underline hover:text-blue-400"
          to="https://ultraabox.github.io/"
        >
          Ultrabox
        </Link>
        <iframe
          title="Playlist das músicas"
          width="560"
          height="315"
          src="http://www.youtube.com/embed/videoseries?list=PLom2XLd5AHsvAKUn2hlzNyWWkWNt8XFMm&si=7NfgLxO1DOqX7b0X"
          allowFullScreen
        ></iframe>
      </p>
    </div>
  );
}
