import AngularLogo from "../assets/logos/circle-angular-logo.svg";
import TypeScriptLogo from "../assets/logos/circle-typescript-logo.svg";
import NodeLogo from "../assets/logos/circle-node-logo.svg";
import PythonLogo from "../assets/logos/circle-python-logo.svg";
import ReactLogo from "../assets/logos/circle-react-logo.svg";
import FigmaLogo from "../assets/logos/circle-figma-logo.svg";

const languagesIcon = [
  { urlImage: AngularLogo, alt: "Logo Angular" },
  { urlImage: TypeScriptLogo, alt: "Logo TypeScript" },
  { urlImage: NodeLogo, alt: "Logo Node" },
  { urlImage: PythonLogo, alt: "Logo Python" },
  { urlImage: ReactLogo, alt: "Logo React" },
  { urlImage: FigmaLogo, alt: "Logo Figma" },
];

function LanguagesIcons() {
  return (
    <div className="flex md:gap-5 gap-2">
      {languagesIcon.map((language, index) => (
        <img
          key={index}
          className="md:h-[9vh] h-[7vh]"
          src={language.urlImage}
          alt={language.alt}
        />
      ))}
    </div>
  );
}

export default LanguagesIcons;