import React from 'react'
import logo from "../assets/logo.svg"
import fundo from "../assets/fundo.svg"
import seta from "../assets/seta.svg"
import pipoca from "../assets/pipoca.svg"
export default function Login() {
  return (
    
    <div className="bg-black">

        <div className="mb-48">
            <img className="w-full absolute" src={fundo} alt="fundo" />
            <header className="flex relative justify-between mx-48 pt-4 pb-48 ">

                <img className="w-48" src={logo} alt="logo" />

                <div className="flex group">
                    <div className="mt-4 ">
                        <div className="bg-neutral-700 pl-4 py-[4px] rounded-[4px] border-[0.5px] border-white mr-6 ">
                            <li className="list-none flex">
                                <p className="text-white">Português</p>
                                <img className="w-6 mx-4" src={seta} alt="seta" />
                            </li>
                        </div>
                    </div>

                    <div>
                        <button className="bg-red-600 border-[1px] border-red-600 px-4 py-[6px] rounded-[4px] hover:text-gray-100  hover:bg-red-800 text-white mt-4 font-semibold">Entrar</button>
                    </div>
                </div>
            </header>

            <div className="relative">
                <h1 className="flex justify-center mb-10 text-[96px] font-bold mx-[500px] text-center text-white">Filmes, séries e muito mais, sem limites</h1>
                <h3 className="flex justify-center mb-5 text-[32px] text-white">A partir de R$ 20,90. Cancele quando quiser.</h3>
                <p className="flex justify-center text-[18px] text-white">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

                <div className="flex justify-center mt-10">
                    <input className="px-32 mr-4 rounded-[4px] opacity-75 bg-gray-900 py-4 border-2 border-white" type="Email" />
                    <div>
                        <button className="bg-red-600 border-[1px] border-red-600 px-8 py-[10px] rounded-[4px] hover:text-gray-100  hover:bg-red-800 text-white font-semibold">
                            <p className="text-[24px]">Vamos lá  </p>
                        </button>
                        
                    </div>
                </div>
            </div>
            
        </div>

        <div className=" flex justify-center">
            <img className="w-32 mr-4"src={pipoca} alt="pipoca" />

            <div className="bg-purple-500 flex justify-between items-center px-64 text-white"> 
                <div className="group">
                    <h3 className="text-[32px]">A Netflix que você adora por apenas R$ 20,90.</h3>
                    <p className="text-[20px]">Aproveite nossa opção mais acessível, o plano com anúncios.</p>
                </div>
                <button className="bg-gray-500 px-10 mx-4">Saiba mais</button>
            </div>









        </div>
    </div>

  )
}
