import Image from "next/image";
import eventsImg from "@/assets/icons/events.png";

export default function TailwindFilters() {
  return (
    <>
      <div className="blur-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor tenetur veritatis praesentium amet modi ad aperiam 
        earum obcaecati voluptas unde!
      </div>

      <div className="blur">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor tenetur veritatis praesentium amet modi ad aperiam 
        earum obcaecati voluptas unde!
      </div>

      <Image className="w-100 blur-xl" src={eventsImg} alt="Events icon" />

      <Image className="w-100 brightness-50" src={eventsImg} alt="Events icon" />
      <Image className="w-100 brightness-75" src={eventsImg} alt="Events icon" />
      <Image className="w-100 brightness-100" src={eventsImg} alt="Events icon" />
      <Image className="w-100 brightness-150" src={eventsImg} alt="Events icon" />
      <Image className="w-100 brightness-200" src={eventsImg} alt="Events icon" />

      <Image className="w-100 contrast-0" src={eventsImg} alt="Events icon" />
      <Image className="w-100 contrast-50" src={eventsImg} alt="Events icon" />
      <Image className="w-100 contrast-100" src={eventsImg} alt="Events icon" />
      <Image className="w-100 contrast-150" src={eventsImg} alt="Events icon" />
      <Image className="w-100 contrast-200" src={eventsImg} alt="Events icon" />
      
      <Image className="w-100 grayscale" src={eventsImg} alt="Events icon" />
      
      <Image className="w-100 invert" src={eventsImg} alt="Events icon" />
      
      <Image className="w-100 sepia" src={eventsImg} alt="Events icon" />
      
      <Image className="w-100 hue-rotate-15" src={eventsImg} alt="Events icon" />
      <Image className="w-100 hue-rotate-60" src={eventsImg} alt="Events icon" />
      <Image className="w-100 hue-rotate-90" src={eventsImg} alt="Events icon" />
      <Image className="w-100 hue-rotate-180" src={eventsImg} alt="Events icon" />
    </>
  );
}
