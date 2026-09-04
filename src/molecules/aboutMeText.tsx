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
        Desenvolvedor Fullstack com foco na construção, sustentação e migração de sistemas complexos. No Backend, atuo com Node.js (TypeScript) e o ecossistema .NET / C#, integrando microsserviços, mensageria (Kafka/RabbitMQ) e bancos de dados relacionais e NoSQL (MongoDB, SQL Server, Firebird). No Frontend, construo interfaces escaláveis com Angular e React.
        <br />
        <br />
        Tenho experiência prática no desenvolvimento de soluções sob medida, desde ferramentas de persistência customizadas até arquiteturas completas com esteiras de CI/CD na AWS e Azure DevOps.
        <br />
        <br />
        Minha trajetória combina atuação corporativa, projetos freelance e vivência em resolução de problemas computacionais e análise de dados utilizando Python, PHP e C/C++.
      </p>
    </div>
  );
}

export default AboutMeText;