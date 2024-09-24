


function App() {

  return (
    <div className='min-h-screen bg-slate-800'>
      <h1 className="text-3xl font-semibold text-center p-4 text-slate-200">My To Do List</h1>
      <div className="max-w-[800px] mx-auto p-4">

        <ul className="p-2 space-y-[2px]">
          <li className="bg-slate-600 rounded p-2 text-slate-200">Lorem ipsum dolor sit amet.</li>
          <li className="bg-slate-600 rounded p-2 text-slate-200">Lorem ipsum dolor sit amet.</li>
          <li className="bg-slate-600 rounded p-2 text-slate-200">Lorem ipsum dolor sit amet.</li>
          <li className="bg-slate-600 rounded p-2 text-slate-200">Lorem ipsum dolor sit amet.</li>
        </ul>

        <div className="mt-4 p-2">
          <button className="bg-slate-600 rounded p-2 text-slate-200">
          Tâches terminées  &#9207; &#9206;
          </button>
          <ul className="pt-2 space-y-[2px]">
            <li className="bg-slate-600 rounded p-2 text-slate-400 line-through">Lorem ipsum dolor sit amet.</li>
            <li className="bg-slate-600 rounded p-2 text-slate-400 line-through">Lorem ipsum dolor sit amet.</li>
            <li className="bg-slate-600 rounded p-2 text-slate-400 line-through">Lorem ipsum dolor sit amet.</li>
            <li className="bg-slate-600 rounded p-2 text-slate-400 line-through">Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>

        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] p-6 w-[800px]">
        <input className="w-full p-2 rounded bg-slate-600 text-slate-200 placeholder-slate-200 outline-0" type="text" placeholder="  Ajouter une tâche"/>
        </div>
      </div>
    </div>
  )
}

export default App
