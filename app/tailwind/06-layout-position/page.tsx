
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
        <div className="absolute inset-y-0 top-0 h-16 bg-blue-300"></div>
      </div>
    </>
  );
}
