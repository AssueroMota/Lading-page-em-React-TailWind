import React from 'react'

const Footer = () => {
  return (
    <footer className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 md:text-xl"></p>

          <div className="flex -mx-6">
            <a href="#" className="mx-3 hover:opacity-80 duration-150">Sobre nós</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacidade</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150 capitalize">Contato</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer