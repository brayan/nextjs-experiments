import Link from "next/link";
import MealsHeader from "./meals-header";
import ImageSlideshow from "./images/image-slideshow";

const linksStyle = "mt-4 inline-block rounded-lg px-4 py-2 font-bold no-underline text-white bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241] active:from-[#fd4715] active:to-[#f9b241]"

export default function MealsHome() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-300">
        <div id="slide-show" className="w-160 h-100">
          <ImageSlideshow />
        </div>
        <div>
          <div id="hero" className="text-[#DDD6CB] text-2xl">
            <h1 className="text-[2rem] font-bold uppercase tracking-[0.15rem] bg-linear-to-r from-[#F9572a] to-[#FFC905] bg-clip-text text-transparent">NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div id="cta" className="flex gap-4 text-2xl">
            <Link href="/community" className={linksStyle}>Join the Community</Link>
            <Link href="/meals" className={linksStyle}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>

      </main>
    </>
  );
}
