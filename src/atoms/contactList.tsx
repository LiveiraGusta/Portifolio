import GithubIcon from "../assets/icons/GithubIcon.svg";
import MailIcon from "../assets/icons/MailIcon.svg";
import InstagramIcon from "../assets/icons/InstagramIcon.svg";
import LinkedinIcon from "../assets/icons/LinkedinIcon.svg";

const contactsListData = [
  { urlLink: "https://github.com/LiveiraGusta", urlImage: GithubIcon, alt: "Logo Github" },
  { urlLink: "mailto:gustavo.oliver456@gmail.com", urlImage: MailIcon, alt: "Logo Email" },
  { urlLink: "https://www.instagram.com/devliveira", urlImage: InstagramIcon, alt: "Logo Instagram" },
  { urlLink: "https://www.linkedin.com/in/oliveiragusta/", urlImage: LinkedinIcon, alt: "Logo Linkedin" },
];

function ContactList() {
  return (
    <div className="flex gap-6 mt-3">
      {contactsListData.map((contact) => (
        <a target="_blank" href={contact.urlLink} key={contact.alt}>
          <img
            className="hover:scale-125 transition-transform duration-500 w-9 invert"
            src={contact.urlImage}
            alt={contact.alt}
          />
        </a>
      ))}
    </div>
  );
}

export default ContactList;