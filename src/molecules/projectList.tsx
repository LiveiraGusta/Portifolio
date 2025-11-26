import Button from "../atoms/button";

const projectsData = [
  {
    name: "Ortopelve",
    description: "Sistema Completo Gestão de Clínicas, gestão de serviços, horarios, consultas, financeiro etc..",
    theme: "Freelance Fullstack",
    isProjectOnline: false,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: false,
    linkCodeProject: "https://github.com/OliveiraGusta/ortopelve",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ["Laravel", "Javascript"],
  },
  {
    name: "Pedra Papel Tesoura Online",
    description: "Jogo online de Pedra Papel Tesoura utilizando Socket.io para comunicação em tempo real",
    theme: "Fullstack",
    isProjectOnline: false,
    linkProject: "",
    isCodePublic: true,
    linkCodeProject: "https://github.com/OliveiraGusta/Pedra-Papel-Tesoura-Online",
    urlImage: "pedra-papel-tesoura-screenshot.png",
    alt: "Screenshot do jogo Pedra Papel Tesoura",
    languages: ["TypeScript"],
  },
  {
    name: "Modulo de Despesa",
    description: "Modulo de despesa para controle financeiro, com cadastro, chamados, histórico completo.",
    theme: "Fullstack",
    isProjectOnline: false,
    linkProject: "",
    isCodePublic: false,
    linkCodeProject: "",
    urlImage: "despesa-screenshot.png",
    alt: "Screenshot do sistema de despesa",
    languages: ["Angular", "Node"],
  },
  {
    name: "Starwars",
    description: "Sistema de avaliação com notas e comentários, usando API Swapi.",
    theme: "Fullstack",
    isProjectOnline: false,
    isCodePublic: true,
    linkCodeProject: "https://github.com/OliveiraGusta/L5-Networks-StarwarsAPI",
    urlImage: "starwars-screenshot.png",
    alt: "Screenshot do sistema Starwars",
    languages: ["Laravel", "Javascript"],
  },
  {
    name: "AutoClick",
    description: "Automatização de processo repetitivo para empresa.",
    theme: "Automação Desktop",
    isProjectOnline: false,
    isCodePublic: true,
    linkCodeProject: "",
    urlImage: "clicker-screenshot.png",
    alt: "Screenshot terminal rodando script",
    languages: ["Python"],
  },
  {
    name: "Politicas de Privacidade",
    description: "Gerador automatizado completo.",
    theme: "Automação Desktop",
    isProjectOnline: false,
    isCodePublic: true,
    linkCodeProject: "https://github.com/OliveiraGusta/Gerador-de-Politicas-de-Privacidade",
    urlImage: "gerador-politica-screenshot.png",
    alt: "Screenshot da aplicação",
    languages: ["Python"],
  },
];

const languagesListData = [
  { name: "Spring", size: "w-10 h-10", urlImage: "spring-logo.svg", alt: "Logo Spring" },
  { name: "Laravel", size: "w-10 h-10", urlImage: "laravel-logo.svg", alt: "Logo Laravel" },
  { name: "Angular", size: "w-10 h-10", urlImage: "angular-logo.svg", alt: "Logo Angular" },
  { name: "Node", size: "w-10 h-10", urlImage: "node-logo.svg", alt: "Logo Node" },
  { name: "Javascript", size: "w-10 h-10", urlImage: "javascript-logo.svg", alt: "Logo Javascript" },
  { name: "TypeScript", size: "w-10 h-10", urlImage: "typescript-logo.svg", alt: "Logo TypeScript" },
  { name: "React", size: "w-10 h-10", urlImage: "react-logo.svg", alt: "Logo React" },
  { name: "Python", size: "w-10 h-10", urlImage: "python-logo.svg", alt: "Logo Python" },
];


function ProjectList() {
  return (
    <div className="pb-20 z-50 flex flex-col">
      <div className="flex flex-wrap gap-10 justify-center">
        {projectsData.map((project, index) => (
          <div key={index} className="max-w-md">
            <img
              src={new URL(`../assets/images/${project.urlImage}`, import.meta.url).href}
              alt={project.alt || "Imagem do projeto"}
              className="rounded-lg w-full h-[250px] object-cover"
            />

            <div className="mt-4 flex justify-between">
              <div>
                <h2 className="text-sm font-bold uppercase">{project.theme}</h2>
                <h2 className="text-2xl font-light mb-2">{project.name}</h2>
              </div>

              <div className="flex gap-3">
                {project.languages.map((language, i) => {
                  const lang = languagesListData.find(l => l.name === language);
                  return (
                    lang && (
                      <img
                        key={i}
                        className={`transition-transform duration-300 hover:scale-125 ${lang.size}`}
                        src={new URL(`../assets/logos/${lang.urlImage}`, import.meta.url).href}
                        alt={lang.alt}
                      />
                    )
                  );
                })}
              </div>
            </div>

            <p className="text-white mt-1 w-5/6">{project.description}</p>

            <div className="mt-6 flex gap-4">
              {project.isProjectOnline && (
                <Button
                  text="Ver Projeto"
                  padding="px-5 py-2"
                  link={project.linkProject ?? "#"}
                  iconUrl={new URL("../assets/icons/GlobeIcon.svg", import.meta.url).href}
                />
              )}

            <Button
              text={project.isCodePublic ? "Ver Código" : "Código Privado"}
              padding="px-5 py-2"
              type={project.isCodePublic ? "download" : "block"}
              link={project.linkCodeProject}
              iconUrl={new URL(`/src/assets/icons/${project.isCodePublic ? "GithubIcon.svg" : "LockIcon.svg"}`, import.meta.url).href}
            />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;