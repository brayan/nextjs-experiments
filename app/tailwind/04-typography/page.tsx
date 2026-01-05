
export default function TailwindTypography() {
  return (
    <>
    <div className="container mx-auto">
      <h1 className="text-2xl">Font Family</h1>
      <div className="font-sans">Font Sans</div>
      <div className="font-serif">Font Serif</div>
      <div className="font-mono">Font Mono</div>
    </div>

    <div className="container mx-auto my-8">
      <h1 className="text-2xl">Font Size</h1>
      <div className="text-sm">Text Small</div>
      <div className="text-base">Text Base</div>
      <div className="text-lg">Text Large</div>
      <div className="text-xl">Text Extra Large</div>
      <div className="text-2xl">Text Extra Large 2</div>
      <div className="text-9xl">Text Extra Large 9</div>
    </div>

    <div className="container mx-auto my-8">
      <h1 className="text-xl">Font Weight</h1>
      <div className="font-normal">Font Normal (Default)</div>
      <div className="font-medium">Font Medium</div>
      <div className="font-semibold">Font Semibold</div>
      <div className="font-bold">Font Bold</div>
    </div>

    <div className="container mx-auto my-8">
      <h1 className="text-xl">Letter Spacing</h1>
      <div className="tracking-tight">Tracking Tight</div>
      <div className="tracking-normal">Tracking Normal</div>
      <div className="tracking-wide">Tracking Wide</div>
    </div>

    <div className="container mx-auto my-8">
      <h1 className="text-xl">Text Alignment</h1>
      <div className="text-left">Text Left</div>
      <div className="text-right">Text Right</div>
      <div className="text-center">Text Center</div>
    </div>

    <div className="container mx-auto my-8 mb-90">
      <h1 className="text-xl">Text Transform</h1>
      <div className="normal-case">Normal Case</div>
      <div className="uppercase">Uppercase</div>
      <div className="lowercase">Lowercase</div>
      <div className="capitalize">capitalize</div>
    </div>
    </>
  );
}
