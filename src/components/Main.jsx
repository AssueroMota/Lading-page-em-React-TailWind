import React from 'react'

const Main = () => {
  return (

    <main className="container mx-auto px-6 pt-16 flex-1 text-center">

      <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase ">Bem Vindo</h2>
      <h1 className="text-3xl md:text-6xl lg:text-6xl font-black mb-8 mt-10">TaildWind + React </h1>

      <p className="text-base md:text-lg lg:text-2xl mb-8">Projeto de LandPage CSS-Tailwind dentro do React</p>

      <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
       777,255 membros
      </div>

      <form
        action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank">

        <div className="flex flex-col md:flex-row justify-center mb-4">
          <input
            placeholder="Coloque seu e-mail..."
            type="email"
            name="member[email]"
            id="member_email"
            className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
          />
          <input
            type="submit"
            value="Enviar"
            name="member[subscribe]"
            id="member_submit"
            className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
          />
        </div>

        <div className="opacity-75 italic text-xl mt-10 ">
          Com o uso de tags: 'lg' tudo foi deixado de forma responsiva aprimorando o tempo

          <div className="m-8 py-4 px-6">
            <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Termos de Servico</a> & <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Politica de privacidade</a>.

          </div>

        </div>

      </form>
    </main>
  )
}

export default Main