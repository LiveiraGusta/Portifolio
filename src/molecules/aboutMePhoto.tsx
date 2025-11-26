import ContactList from '../atoms/contactList'
import Button from '../atoms/button'
import mePhoto from '../assets/images/me.png'
import downloadCv from '../assets/download/GustavoOliveira-DesenvolvedorFullstack.pdf'
import downloadIcon from '../assets/icons/DownloadIcon.svg'

export default function AboutMePhoto() {
  return (
    <div 
      style={{
        background: "radial-gradient(ellipse at top left, rgba(6, 5, 21, 0.2) 60%, rgba(255, 255, 255, 1) 400%)"
      }} 
      className="flex flex-col items-center rounded-3xl shadow-lg lg:w-1/3"
    >
      <div className="flex flex-col items-center gap-5 py-10">
        <h2 className="font-bold text-2xl">QUEM SOU EU</h2>

        <div className="w-1/2 relative p-[7px] rounded-full before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-700 before:via-pink-500 before:to-blue-700 before:bg-[length:300%_300%] before:animate-gradientMove animate-float">
          <img 
            className="relative z-10 rounded-full" 
            src={mePhoto} 
            alt="Minha foto" 
            loading="lazy"
            draggable={false}
          />
        </div>

        <ContactList />

        <Button
          text="Currículo"
          type="download"
          padding="px-7 py-2"
          link={downloadCv}
          iconUrl={downloadIcon}
          altIcon="Ícone download"
        />
      </div>
    </div>
  )
}
