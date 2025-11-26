
function AboutMeText() {
  return (
    <div style={{
        background: "radial-gradient(ellipse at right top , rgba(6, 5, 21, 0.2) 55%, rgba(255, 255, 255, 1) 500%)"
      }} className="flex flex-col gap-5 items-center rounded-3xl shadow-lg z-10 p-10  lg:h-[24vw] lg:w-2/3">
        <h1 className="text-2xl font-bold">SOBRE</h1>
        <p className="text-lg">
          Desenvolvedor Fullstack com experiência na construção, evolução e migração de aplicações web, atuando tanto no Frontend (Angular, React) quanto no Backend (Node, Laravel).
          <br></br>
          <br></br>
          Já desenvolvi soluções personalizadas, desde micro ORMs até sistemas completos. Também tenho vivência como freelancer, criando aplicações web e desktop, além de consultorias técnicas em projetos específicos.
          <br></br>
          <br></br>
          Minha trajetória inclui experiências acadêmicas e práticas com diversas tecnologias, como PHP, jQuery e Python, além de projetos em C/C++ voltados para análise de dados e problemas computacionais.
       </p>
      </div>
  )
}

export default AboutMeText