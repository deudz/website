import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "FallenBrick" },
    { name: "description", content: "projetos do deudz" },
  ];
};

export default function Projetos() {
  return (
    <div className="main-content">
      <h1>Projetos</h1>
      <p>Aqui é onde os meus projetos como software e scripts.</p>
      <p>
        A maioria deles estão no meu{" "}
        <Link to="https://github.com/deudz">Github</Link> e no meu{" "}
        <Link to="https://codeberg.org/deudz">Codeberg.</Link>
      </p>
      <div className="flex flex-wrap">
        <div className="card-link">
          <Link className="text-center" to="https://codeberg.org/deudz/rainbow">
            <img
              src="/rainbow.webp?url"
              alt="Rainbow icon"
              width={256}
              height={192}
            />
            Rainbow
          </Link>
          <p className="text-sm text-center">Mostra as cores do seu terminal</p>
        </div>
        <div className="card-link">
          <Link className="text-center" to="https://codeberg.org/deudz/emacs">
            <img
              src="/emacs.webp?url"
              alt="Janela do Emacs"
              width={177}
              height={192}
            />
            Emacs
          </Link>
          <p className="text-sm text-center">Minha configuração do Emacs</p>
        </div>
        <div className="card-link">
          <Link className="text-center" to="https://codeberg.org/deudz/neovim">
            <img
              src="/neovim.webp?url"
              alt="Janela do Neovim"
              width={256}
              height={167}
            />
            Neovim
          </Link>
          <p className="text-sm text-center">Configuração do Neovim</p>
        </div>
      </div>
    </div>
  );
}
