
export default function TailwindColorsPage() {
  return (
    <div>
      <p className="text-black">Tailwind is awesome</p>
      <p className="text-white bg-green-500">Tailwind is awesome</p>
      <p className="text-red-500 underline">Tailwind is awesome</p>
      <p className="text-green-500 underline decoration-red-400">Tailwind is awesome</p>
      <p className="text-emerald-500">Tailwind is awesome</p>
      <p className="text-zinc-300">Tailwind is awesome</p>
      <p className="text-slate-800 underline">Tailwind is awesome</p>

      <input type="text" className="border border-blue-400" />
      <input type="text" className="border border-green-400" />

      <div className="divide-y divide-blue-300">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

      <button className="outline outline-red-500">Hello</button>
      <button className="outline outline-blue-200">Hello</button>

      <button className="shadow-lg bg-cyan-500 shadow-purple-500/40">
        Subscribe
      </button>

      <input type="checkbox" className="accent-purple-500" />

      <div className="bg-[#427FAB]">Hello</div>
      <div className="bg-[rgb(255,0,0)]">Hello</div>
      <div className="bg-[steelblue]">Hello</div>
    </div>
  );
}
