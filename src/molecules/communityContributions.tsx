import quadroDaAula from '../assets/images/quadro-da-aula.png';
import editandoVideo from '../assets/images/editando-video-screenshot.png';
import palestrando from '../assets/images/palestra-screenshot.png';

const contributionsData = [
  {
    title: 'Criação de Conteúdo Tech',
    description:
      'Produzo vídeos e análises sobre carreira em tecnologia, mercado de desenvolvimento e visão crítica para programadores iniciantes.',
    image: editandoVideo,
    alt: 'Canal Gustavo Liveira',
    link: 'https://youtu.be/VTm88wPMAho?si=YqRaV97ucx9a0idk',
  },
  {
    title: 'Instrutor Voluntário (SSF)',
    description:
      'Ensinei fundamentos de desenvolvimento web (HTML, CSS e JavaScript) e inclusão digital para jovens de 13 a 17 anos no Projeto Solidariedade Sem Fronteiras.',
    image: quadroDaAula,
    alt: 'Aulas de desenvolvimento web na ONG SSF',
  },
  {
    title: 'Palestrante no II CATI FAM',
    description:
      'Ministrei a palestra "Como programar para várias plataformas com o mesmo código", abordando desenvolvimento multiplataforma e boas práticas.',
    image: palestrando,
    alt: 'Palestra no II CATI - Centro Universitário FAM',
  },
];

function CommunityContributions() {
  return (
    <div id='community-contributions' className="relative flex flex-col items-center px-10 pb-40 lg:px-44 mt-28 gap-5">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-10 z-[-20]"
        style={{ 
          backgroundImage: "url('src/assets/images/point-grid.svg')",
          backgroundSize: "93%" 
        }} 
      />
      
      <h1 className="font-bold text-3xl text-center">CONTRIBUIÇÕES PARA A COMUNIDADE</h1>
      <p className="font-thin text-center">
        Projetos sociais, palestras e iniciativas de impacto além do código
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-50 mt-4">
        {contributionsData.map((contribution, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-3xl shadow-2xl p-6"
            style={{
              background: "radial-gradient(ellipse at bottom right, rgba(6, 5, 21, 0.15) 70%, rgba(255, 255, 255, 0.9) 400%)",
            }}
          >
            <img
              src={contribution.image}
              alt={contribution.alt}
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-center text-xl font-semibold mb-2">{contribution.title}</h3>
            <p className="text-sm text-center text-gray-300 leading-relaxed">{contribution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityContributions;