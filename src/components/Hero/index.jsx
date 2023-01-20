

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full h-screen object-cover" src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      <div className = "bg-black/30 absolute top-0 left-0 w-full h-screen"/>

      <div className="absolute top-0  w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Tudo Incluído</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Praias privadas & Copas</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
          Relaxe nas macias faixas de areia branca, rosa ou preta das praias com as águas 
          mais mornas e azuis do mundo. 
          Entretanto, este arquipélago com milhares de ilhas oferece uma coisa diferente para cada viajante
          </p>
          <button className="bg-white text-black">Reserve Agora</button>
        </div>
      </div>

    </div>
  )
}
export default Hero