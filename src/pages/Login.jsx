import React from 'react'
import logo from "../assets/logo.svg"
import fundo from "../assets/fundo.svg"
import seta from "../assets/seta.svg"
import pipoca from "../assets/pipoca.svg"
import computador from "../assets/adesivo_computador.svg"
import lupa from "../assets/adesivo_lupa.svg"
import moeda from "../assets/adesivo_moeda.svg"
import quadrados from "../assets/adesivo_quadrados.svg"
import china from "../assets/china.svg"
import seta_direita from "../assets/seta_direita.svg"
import x from "../assets/x.svg"

export default function Login() {
  return (
    
    <div className="bg-black">

        <div className="mb-4">
            <img className="w-full absolute  " src={fundo} alt="fundo" />
            <header className="flex relative justify-between mx-48 pt-4 pb-48 ">

                <img className="w-48" src={logo} alt="logo" />

                <div className="flex group">
                    <div className="mt-4 opacity-90">
                        <div className="bg-neutral-900 pl-4 py-[4px] rounded-[4px] border-[0.5px]  border-white mr-6 ">
                            <li className="list-none flex">
                                <img className="mr-2" src={china} alt="sibolo" />
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

            <div className="relative ">
                <h1 className="flex justify-center mb-10 text-[64px] font-bold mx-[700px] text-center text-white">Filmes, séries e muito mais, sem limites</h1>
                <h3 className="flex justify-center mb-5 text-[24px] font-semibold text-white">A partir de R$ 20,90. Cancele quando quiser.</h3>
                <p className="flex justify-center text-[18px] text-white">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

                <div className="flex justify-center mt-4">
                    <input className="px-32 mr-2 rounded-[4px] opacity-75 bg-gray-900 py-4 border-2 border-neutral-500" type="Email" />
                    <div>
                        <button className="flex bg-red-600 border-[1px] border-red-600 px-8 py-[10px] rounded-[3px] hover:text-gray-100  hover:bg-red-800 text-white font-semibold">
                            <p className="text-[24px]">Vamos lá  </p>
                            <img className="w-24" src={seta_direita} alt="seta para esquerda" />
                        </button>
                        
                    </div>
                </div>
            </div>
            
        </div>

        
        <div className="justify-center col-1 pb-96 mt-96">

            <div className=" flex justify-between items-center px-72 text-white"> 
                <img className=" w-32"src={pipoca} alt="pipoca" />
                <div className="bg-gradient-to-r from-purple-950 via-purple-950 to-indigo-950 px-10 py-4 flex rounded-[10px]">
                    <div className="group">
                        <h3 className="text-[32px]">A Netflix que você adora por apenas R$ 20,90.</h3>
                        <p className="text-[20px]">Aproveite nossa opção mais acessível, o plano com anúncios.</p>
                    </div>
                    
                    <div>
                        <button className="text-[24px] bg-gray-700 px-10 mx-6 py-2 mt-4 ml-48 rounded-[10px] hover:bg-gray-900">Saiba mais</button>
                    </div>
                </div>
                
            </div>



            <div className="mt-20">
                <h1 className="text-white ml-[250px] text-[52px] font-bold">Mais motivos para assinar</h1>
            </div>




            <section className="flex justify-center space-x-4 mx-64 mt-10 ">
                
                <div className="bg-purple-950 rounded-[10px] ">
                    <div className="mx-10">
                        <h3 className="text-[28px] text-white">Aproveite na TV</h3>
                        <p className="text-gray-400">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                        <img className="bottom-0 right-0" src={computador} alt="computador" />
                    </div>
                </div>
                    
                <div className="bg-purple-950 rounded-[10px]">
                    <div className="mx-10">
                        <h3 className="text-[28px] text-white">Baixe séries para assistir offline</h3>
                        <p className="text-gray-400">Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                        <img src={moeda} alt="moeda" />
                    </div>
                </div>

                <div className="bg-purple-950 rounded-[10px]">
                    <div className="mx-10">
                        <h3 className="text-[28px] text-white">Assista onde quiser</h3>
                        <p className="text-gray-400">Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
                        <img src={lupa} alt="lupa" />
                    </div>
                </div>
                  
                <div className="bg-purple-950 rounded-[10px]">
                    <div className="mx-10">
                        <h3 className="text-[28px] text-white">Crie perfis para crianças</h3>
                        <p className="text-gray-400">Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                        <img className=""src={quadrados} alt="2 quadrados sorridentes" />
                    </div>
                </div>

            </section>


            <h1 className="text-white ml-[250px] text-[52px] font-bold mt-32 mb-10">Perguntas frequentes</h1>

            <section className="mx-64">

            <div className="bg-neutral-600 mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[32px] font-semibold ml-10">O que é Netflix?</h2>
                    <img src={x} alt="um x" />
                </div>
            </div>


            <div className="bg-neutral-600 mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[32px] font-semibold ml-10">Quanto custa a Netflix?</h2>
                    <img src={x} alt="um x" />
                </div>
            </div>

            <div className="bg-neutral-600 mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[32px] font-semibold ml-10">Onde posso assistir?</h2>
                    <img src={x} alt="um x" />
                </div>
            </div>


            <div className="bg-neutral-600 mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[32px] font-semibold ml-10">Como faço para cancelar?</h2>
                    <img src={x} alt="um x" />
                </div>
            </div>


            <div className="bg-neutral-600 mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[32px] font-semibold ml-10">O que eu posso assistir na Netflix?</h2>
                    <img src={x} alt="um x" />
                </div>
            </div>
            

            <div className="bg-neutral-600 mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[32px] font-semibold ml-10">A Netflix é adequada para crianças?</h2>
                    <img src={x} alt="um x" />
                </div>
            </div>


            </section>


            <section className="justify-start mt-32 ml-64 ">
                
            <p className="text-white mb-6">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <div className="flex ">
                
                <input className="px-96  mr-4 rounded-[4px] opacity-75 bg-gray-900 py-4 border-2 border-neutral-500" type="Email"/>
                <div>
                    <button className="bg-red-600 border-[1px] border-red-600 px-10 py-4 rounded-[4px] hover:text-gray-100  hover:bg-red-800 text-white font-bold">
                        <p className="text-[24px]">Vamos lá </p>
                    </button>
                        
                </div>
            </div>
            <button className="text-neutral-500 mt-10 ml-10 ">Dúvidas? Ligue para</button><button className="text-neutral-400 mt-10 ml-2 hover:text-neutral-300 underline"> 0800 591 2876</button>
            </section>




        </div>
    </div>

  )
}
