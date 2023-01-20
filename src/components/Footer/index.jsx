import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'


const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h6 className = "font-bold uppercase pt-2" >Soluções</h6>
          <ul>
            <li className = "py-1">Viagem</li>
            <li className = "py-1">Reservas</li>
            <li className = "py-1">Voos</li>
            <li className = "py-1">Cruzeiros</li>
            <li className = "py-1">Terra</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Suporte</h6>
          <ul>
            <li className = "py-1">Preços</li>
            <li className = "py-1">Documentações</li>
            <li className = "py-1">Turismo</li>
            <li className = "py-1">Restituições</li>
          </ul>
        </div>
        <div>
          <h6 className = "font-bold uppercase pt-2" >Compania</h6>
          <ul>
            <li className = "py-1">Sobre</li>
            <li className = "py-1">Blog</li>
            <li className = "py-1">Trabalhos</li>
            <li className = "py-1">Parceiros</li>
            <li className = "py-1">Press</li>
          </ul>
        </div>
        <div>
          <h6 className = "font-bold uppercase pt-2" >Jurídico</h6>
          <ul>
            <li className = "py-1">Reividicações</li>
            <li className = "py-1">Privacidade</li>
            <li className = "py-1">Termos</li>
            <li className = "py-1">Políticas</li>
            <li className = "py-1">Condições</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">Inscreva-se em nossa newsletter</p>
          <p className="py-4">As últimas ofertas, artigos e recursos enviados para sua caixa de entrada semanalmente.</p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder = "Seu melhor Email" />
            <button className="p-2 mb-4 rounded-md">Inscreva-se</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">2023 ExperienceTur, LLC.Todos direitos Reservados</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <TiSocialPinterest size={30}/>
          </div>
        </div>  
    </div>
  )
}
export default Footer