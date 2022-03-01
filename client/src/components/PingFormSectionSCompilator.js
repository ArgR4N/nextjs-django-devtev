import * as Icon from "react-bootstrap-icons"

function Init({className}) {
  return (
    <section className={`p-10 justify-evenly flex flex-col ${className}`}>
      <div className="border-2 text-3xl border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-1 pl-2 rounded-sm">
        <Icon.Award />
        <input
          className="outline-none bg-transparent pb-0.5"
          placeholder="Agrega un tituló"
          type="text"
        />
      </div>
      <div className="flex text-xl border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 gap-2 rounded-sm items-baseline p-2">
        <Icon.Book />
        <textarea
          rows="5"
          className="outline-none bg-transparent w-full"
          placeholder="Una descripcion..."
        />
      </div>
 {/*

      <div className="flex items-center text-xl border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 gap-2 rounded-sm pl-2 p-1">
        <Icon.Hash />
        <input
          list="categorys"
          className="bg-transparent w-full outline-none"
          name="browser"
          id="browser"
          placeholder="Chose a category"
        />
      <datalist id="categorys" className="bg-transparent w-full">
          <option value="Snippet" />
          <option value="Website" />
          <option value="3d Model" />
          <option value="Envieronment (.dot files?)" />
          <option value="Image" />
        </datalist>
</div>
     */}

      </section>
  );
}

function SelectImage(){
    return(
        <section>
        
            <input type="image" />
    
        </section>

    )

}


export { Init, SelectImage };
