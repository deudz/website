export default function Sobre() {
  return (
    <div className="main-content">
      <h1>Sobre</h1>
      <p>
        A FallenBrick é uma mini-empresa/produtora de mídia. Ela, por enquanto,
        só consiste de um integrante:
      </p>
      <div className="flex flex-col justify-center">
        <div className="card">
          <img src="/eu.png?url" alt="Foto do deudz" width={256} height={256} />
          <p>Danilo Soares (eu!)</p>
        </div>
      </div>
    </div>
  );
}
