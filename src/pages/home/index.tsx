
import VideoHome from "../../organisms/videoHome.tsx";
import Services from "../../organisms/services.tsx";
import ProjectsAboutMe from "../../organisms/projectsAboutMe.tsx";
import Community from "../../organisms/community.tsx";
import Depoiments from "../../organisms/depoiments.tsx";
import Footer from "../../organisms/footer.tsx";

function Home() {
  return (
    <>
      <VideoHome />
      <Services />
      <ProjectsAboutMe />
      <Community />
      <Depoiments />
      <Footer />
    </>
  );
}

export default Home;
