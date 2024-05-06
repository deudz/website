import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "FallenBrick" },
    { name: "description", content: "vulgo site do deudz" },
  ];
};

export default function Index() {
  return (
    <div className="main-content">
      <h1>Olá, seja bem-vindo!</h1>
      <p>
        Eu criei esse site para ser um blog para eu reclamar sobre coisas, criar
        tutoriais e ter um site para meus projetos e outras coisas que eu fiz.
      </p>
    </div>
  );
}
