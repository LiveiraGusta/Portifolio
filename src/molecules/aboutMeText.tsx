function AboutMeText() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse at right top , rgba(6, 5, 21, 0.2) 55%, rgba(255, 255, 255, 1) 500%)",
      }}
      className="flex flex-col gap-5 items-center rounded-3xl shadow-lg z-10 p-10 lg:h-[24vw] lg:w-2/3"
    >
      <h1 className="text-2xl font-bold">SOBRE</h1>
      <p className="text-lg">
        Sou desenvolvedor Fullstack focado em backend, microsserviços e modernização de código legado. No dia a dia, construo e mantenho APIs em Node.js (TypeScript) e C# (.NET), lidando com mensageria (Kafka e RabbitMQ) e bancos como MongoDB, SQL Server e Firebird. No front, trabalho principalmente com Angular e React.
        <br />
        <br />
        Gosto de resolver gargalo de verdade. já cheguei a criar um micro ORM próprio pra extrair performance de banco legado e cuido de esteiras de CI/CD na AWS e Azure DevOps.
        <br />
        <br />
        Minha base vem da prática: projetos corporativos em produção, freelas de ponta a ponta e muita linha de código em Python, PHP e C/C++.
      </p>
    </div>
  );
}

export default AboutMeText;