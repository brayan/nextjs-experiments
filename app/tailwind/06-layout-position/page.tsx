
export default function TailwindLayoutPosition() {
  return (
    <>
      <div className="relative w-1/2 h-12 bg-red-200">
        <p>Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* Top Left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Top right corner */}
      <div className="relative h-32 w-32 bg-blue-100">
        <div className="absolute right-0 top-0 h-16 w-16 bg-blue-300"></div>
      </div>

      {/* Bottom Left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom Right corner */}
      <div className="relative h-32 w-32 bg-blue-100">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-blue-300"></div>
      </div>

      {/* Span top edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Span left edge */}
      <div className="relative h-32 w-32 bg-blue-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-blue-300"></div>
      </div>

      {/* Span bottom edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Display Classes */}
      <div className="my-8 mx-16">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        <span className="inline font-bold">This is inline</span> Numquam, ipsa! Porro, perspiciatis laudantium totam perferendis 
        cum illo hic impedit neque facilis quidem saepe adipisci dicta 
        sapiente voluptatum voluptate magni maxime earum dolores 
        accusantium eum maiores, <span className="inline-block font-bold">This is inline block</span>mollitia quasi fugiat animi. 
        Eligendi, error aliquam illum in odit voluptatem doloribus 
        fugiat dolorum et eos <span className="block font-bold">This is block</span> laborum cupiditate ratione porro eum 
        nobis <span className="hidden font-bold">This is hidden</span>reprehenderit omnis rem?
      </div>

      {/* Z-Index */}
      <div className="relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-300 z-40">1</div>
        <div className="absolute left-20 w-24 h-24 bg-blue-400">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-500 z-10">3</div>
        <div className="absolute left-60 w-24 h-24 bg-blue-600 z-20">4</div>
        <div className="absolute left-80 w-24 h-24 bg-blue-700 z-30">5</div>
      </div>
    </>
  );
}
