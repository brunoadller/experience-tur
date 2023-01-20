
const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/9762762/pexels-photo-9762762.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/416823/pexels-photo-416823.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/3590733/pexels-photo-3590733.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      </div>

      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Planeje sua Próxima Viagem</h3>
        <p className="text-2xl py-6">Lugares para ver, maneiras de explorar e experiências típicas.</p>
        <p className="pb-6">Uma mistura de charme, tradição e modernidade.</p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">Saiba Mais</button>
          <button className="bg-black text-white border-black hover-shadow-xl">Escolha Sua Viagem</button>
        </div>
      </div>

    </div>
  )
}

export default Plan;