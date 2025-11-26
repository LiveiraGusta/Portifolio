import ContactList from "../atoms/contactList";
import logoLiveira from "../assets/images/Liveira.png";

export default function Footer() {
  return (
    <footer
      style={{
        background: "radial-gradient(ellipse at right bottom, #191824 60%, #29236d 100%)"
      }}
      className="flex flex-col pt-5 text-white"
    >
      <div className="flex flex-col md:flex-row items-center px-10 gap-10 md:gap-0">

        {/* Bloco à esquerda */}
        <div className="basis-12 md:basis-2/12 flex flex-col items-center text-center">
          <img
            src={logoLiveira}
            alt="Logo Liveira"
            className="w-6/12 border-b-2 mb-3"
            draggable={false}
            loading="lazy"
          />
          <p className="w-11/12 mb-3">
            Valeu por visitar meu portfólio! Se quiser trocar uma ideia, só chamar.
          </p>

          <ContactList />
        </div>

        {/* Navegação */}
        <div className="basis-10/12 flex justify-evenly w-full">

          <div className="flex flex-col text-sm">
            <p className="opacity-50 mb-1 font-semibold">Navegação</p>

            {["home","services","projects","about-me","depoiments"].map(item => (
              <a
                key={item}
                href={`#${item}`}
                className="mb-2 transition-all duration-200 hover:text-gray-400 hover:underline"
              >
                {item === "home" && "Home"}
                {item === "services" && "Serviços"}
                {item === "projects" && "Projetos"}
                {item === "about-me" && "Sobre mim"}
                {item === "depoiments" && "Depoimentos"}
              </a>
            ))}
          </div>

          {/* Serviços */}
          <div className="hidden md:flex flex-col text-sm">
            <p className="opacity-50 mb-1 font-semibold">Serviços</p>

            {[
              "Site Institucional e Landing Page",
              "Chatbot para WhatsApp com IA",
              "Criação de Identidade Visual e Flyers",
              "Ecommerce",
              "Email Marketing"
            ].map(serv => (
              <a
                key={serv}
                href="#services"
                className="mb-2 transition-all duration-200 hover:text-gray-400 hover:underline"
              >
                {serv}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="flex justify-center gap-2 py-5 opacity-80 text-sm">
        <p>© Liveira Dev</p>
        <p>2025</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
