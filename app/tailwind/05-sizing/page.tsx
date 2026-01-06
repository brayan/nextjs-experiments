
export default function TailwindSizingPage() {
  return (
    <div>
      <div className="bg-black text-white w-1">Hello 1</div>
      <div className="bg-black text-white w-96">Hello 96</div>
      
      <div className="bg-green-700 text-white w-1/4">Percentage 25%</div>
      <div className="bg-green-700 text-white w-1/3">Percentage 33.33%</div>
      <div className="bg-green-700 text-white w-1/2">Percentage 50%</div>
      
      <div className="bg-blue-500 text-white w-screen">Viewport Width</div>
      <div className="bg-blue-500 text-white w-full">Full Width</div>

      <div className="bg-blue-500 text-white w-[300px]">Arbitrary Width</div>
      
      <div className="bg-gray-300 text-white max-w-sm mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolorem consequuntur ducimus tempora consectetur, magnam nemo odit repellendus sunt? Hic, corporis temporibus perspiciatis voluptates repellat illum iusto velit eligendi accusamus?</div>

      <div className="flex items-end">
        <div className="bg-orange-500 w-20 h-24">Hello</div>
        <div className="bg-orange-500 w-20 h-32">Hello</div>
        <div className="bg-orange-500 w-20 h-40">Hello</div>
        <div className="bg-orange-500 w-20 h-48">Hello</div>
        <div className="bg-orange-500 w-20 h-64">Hello</div>
        <div className="bg-orange-500 w-20 h-96">Hello</div>

        <div className="bg-orange-500 w-20 h-screen">Full Screen Height</div>
      </div>
    </div>
  );
}
