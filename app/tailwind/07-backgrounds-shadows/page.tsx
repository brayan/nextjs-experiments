
export default function TailwindBackgroundsAndShadows() {
  return (
    <>
      <div className="h-64 w-72 bg-[url('/images/pizza.jpg')] bg-no-repeat bg-cover bg-center" />
      <div className="h-24 bg-linear-to-r from-cyan-500 to-blue-500"></div>

      <div className="w-96 mt-6 ml-4 p-3 shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-blue-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi voluptatem dolore quaerat. Architecto praesentium, 
        nam accusantium consectetur dignissimos magni eum.
      </div>

      <div className="flex justify-center -space-x-24">
        <div className="mix-blend-multiply bg-blue-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque soluta in suscipit, exercitationem quis rem! Magni, earum perspiciatis! Quis?</div>
        <div className="mix-blend-multiply bg-pink-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis quia atque aliquid voluptatem quos nam optio. Laborum, adipisci accusantium.</div>
      </div>
    </>
  );
}
