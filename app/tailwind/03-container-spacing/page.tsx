
export default function TailwindContainerAndSpacing() {
  return (
    <div className="container mx-auto">
      <article>
        <h3>Article One</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur cumque cum accusantium, ex dolorem nam tempora.
          Suscipit a qui esse tempore fuga ducimus est, provident error
          iusto quae dolor magnam.
        </p>
      </article>

      {/* Margin */}
      <div className="bg-slate-100 my-2">Margin Vertical</div>
      <div className="bg-slate-100 mx-2">Margin Horizontal</div>
      <div className="bg-slate-100 ml-2">Margin Left</div>
      <div className="bg-slate-100 mr-2">Margin Right</div>
      <div className="bg-slate-100 mt-2">Margin Top</div>
      <div className="bg-slate-100 mb-2">Margin Bottom</div>
      <div className="bg-slate-100 mt-[23.8px]">Margin Top with arbitrary value</div>

      {/* Padding */}
      <div className="bg-slate-100 py-2">Padding Vertical</div>
      <div className="bg-slate-100 px-2">Padding Horizontal</div>
      <div className="bg-slate-100 pl-2">Padding Left</div>
      <div className="bg-slate-100 pr-2">Padding Right</div>
      <div className="bg-slate-100 pt-2">Padding Top</div>
      <div className="bg-slate-100 pb-2">Padding Bottom</div>
      <div className="bg-slate-100 pt-[23.8px]">Padding Top with arbitrary value</div>
    
      {/* Space Between X */}
      <div className="flex mt-24 space-x-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>

      {/* Space Between Y */}
      <div className="flex flex-col my-4 space-y-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>
    
    </div>
  );
}

/*
  Breakpoints for Container
  container None ->   width: 100%;
  sm  (640px) ->      max-width: 640px;
  md  (768px) ->      max-width: 768px;
  lg  (1024px) ->     max-width: 1024px;
  xl  (1280px) ->     max-width: 1280px;
  2xl (1536px) ->     max-width: 1536px;
*/


/*
  Margin Values
  m-0 -> margin: 0px;
  mx-0 -> margin-left: 0px;

*/