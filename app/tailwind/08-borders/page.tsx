
export default function TailwindBordersPage() {
  return (
    <>
      <div className="w-96 m-3 p-5 border">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil.
      </div>

      <div className="w-96 m-3 p-5 border-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil.
      </div>

      <div className="w-96 m-3 p-5 border-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil.
      </div>
      
      <div className="w-96 m-3 p-5 border-4 border-red-500">
        Full Border
      </div>
      
      <div className="w-96 m-3 p-5 border-x-4 border-blue-500">
        Vertical Border
      </div>
      
      <div className="w-96 m-3 p-5 border-y-4 border-teal-500">
        Horizontal Border
      </div>
      
      <div className="w-96 m-3 p-5 border-t-4 border-amber-500">
        Top Border
      </div>
      
      <div className="w-96 m-3 p-5 border-b-4 border-amber-500">
        Bottom Border
      </div>
      
      <div className="w-96 m-3 p-5 border-4 rounded border-blue-500">
        Rounded Border
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-lg border-emerald-500">
        Large Rounded Border
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-full border-red-300">
        Full Rounded Border
      </div>

      <button className="outline-4 outline-offset-2 outline-amber-500">Outline button</button>
    </>
  );
}
