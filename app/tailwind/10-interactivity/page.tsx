
export default function TailwindInteractivity() {
  return (
    <div>
      <button className="bg-black text-white py-3 px-5 rounded log m-3 hover:bg-orange-500">Hover</button>
      <button className="bg-black text-white py-3 px-5 rounded log m-3 focus:bg-green-500">Focus</button>
      <button className="bg-black text-white py-3 px-5 rounded log m-3 active:bg-yellow-500">Active</button>

      <a href="" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
        <h3 className="group-hover:text-white">Card Title</h3>
        <p className="group-hover:text-white">This is the card text</p>
      </a>

      <ul className="mt-8">
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 1</li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 2</li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 3</li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 4</li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 5</li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 6</li>
      </ul>

      {/* Remove the entire appearance that differences from browser to browser */}
      <select className="appearance-none mt-9">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>


      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-wait">Cursor Wait</button>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">Cursor Not Allowed</button>

      <p className="cursor-pointer">Cursor Pointer, like a link</p>


      <div className="select-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae?</div>
      <div className="select-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae?</div>
      <div className="select-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae?</div>
      <div className="select-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae?</div>

      <a href="#item" className="block my-6">Go To Item</a>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dicta suscipit doloremque magnam repellat nihil velit accusamus
        incidunt porro illum optio dolore, fugit, voluptatum nostrum unde.
        Odit nobis placeat cumque accusantium harum, quam officiis
        voluptatum veritatis maiores pariatur cum dignissimos laudantium
        inventore non, ipsum fugiat saepe voluptas officia necessitatibus
        sint voluptate blanditiis. Veritatis aliquam commodi iste sequi
        adipisci repudiandae doloremque sed? Quos, quidem obcaecati qui
        iusto amet, accusamus suscipit sit eum quas incidunt consequuntur
        ullam. Explicabo, voluptatibus ducimus. Explicabo nesciunt aut
        nihil incidunt. Culpa soluta asperiores modi ullam, vel nostrum
        optio accusantium beatae, eius necessitatibus repellendus
        praesentium molestias dolorum aperiam ex debitis ipsa nisi nobis
        iusto laboriosam nulla et assumenda sunt? Veniam, laboriosam
        placeat asperiores harum minus velit explicabo fuga iure
        voluptatibus labore eligendi enim veritatis similique repellendus
        voluptate facere quidem! Ab, labore eum sapiente impedit itaque et
        nostrum quas architecto voluptas, dolor tenetur a molestiae,
        cumque atque soluta delectus quos. Perferendis deleniti, eius,
        veritatis praesentium incidunt labore quis ducimus molestias
        explicabo quibusdam soluta, magnam error sequi libero voluptate
        quisquam nisi beatae repellat distinctio illum quo laudantium
        ipsum! Iure deserunt fuga aspernatur explicabo laboriosam cum
        odit aliquam maiores dolore rerum architecto eos odio laborum
        repellendus animi dolores esse ipsa, et veritatis ea dolor
        delectus omnis nemo velit. Odio aspernatur sunt consectetur.
        A quibusdam, maiores consequuntur porro non quam facere obcaecati
        eum illo sapiente velit corrupti quia voluptate quod eaque quae
        consectetur in! Ipsa minima laudantium architecto amet vel
        temporibus odit eos atque libero molestias, error perferendis
        incidunt deserunt reiciendis distinctio consectetur quis voluptate. Quod vel, ipsam ducimus quam aperiam neque sequi. Laborum, enim. Harum debitis soluta maxime dicta ex porro officiis quaerat, nemo praesentium voluptates. Officia, fugit modi blanditiis perferendis sunt ea facilis esse, sit minus nihil, repudiandae maxime amet praesentium. Facere voluptates doloremque libero quam obcaecati, illum sunt vero praesentium, quod distinctio ab, ex harum. Vitae iste atque natus sit assumenda quos necessitatibus, rem velit tempore eligendi molestiae illum quasi. Id aliquam dignissimos nihil aspernatur quod quasi quae veritatis error adipisci quo! Sequi cupiditate placeat labore inventore! Sint molestias mollitia, beatae nemo, quo expedita temporibus repudiandae eum ducimus voluptatibus illum nostrum ratione nobis, tempore culpa consequatur! Ad quis hic impedit suscipit id ipsum distinctio sint inventore animi voluptatibus, autem similique magnam in culpa. Tempore accusamus fugiat inventore, in culpa eos, temporibus delectus id dicta expedita excepturi consequuntur quisquam facere reprehenderit explicabo corporis ipsa odit. Distinctio laudantium quos repellat fuga beatae.</p>
    
      <div id="item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae non voluptatum vitae id, quas voluptatem corrupti 
        distinctio illum minima recusandae eum enim porro nihil 
        dolorem assumenda rem! Reprehenderit officia expedita ex 
        asperiores sapiente numquam, doloribus impedit eveniet vel 
        minima, similique praesentium voluptatem debitis rem ratione 
        quod, eos suscipit eligendi. Totam.
      </div>
    </div>
  );
}
