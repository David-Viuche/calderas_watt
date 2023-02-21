
import { useState } from 'react'
import { HeaderLink } from './HeaderLink'
import { AiOutlineCloseSquare } from 'react-icons/ai/index.js'
import { TfiMenuAlt, TfiInstagram } from 'react-icons/tfi/index.js'

export const Header = ({children}) => {
  const [isOpen, setisOpen] = useState(false)

  function handleOnclick () {
    setisOpen(open => !open)
  }

  return (
    <header className='bg-white text-lg text-slate-400 flex flex-col w-full h-auto sm:flex-row sm:justify-around sm:h-auto'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='sm:-m-0'>
          <a href='/' className='sm:bg-white w-auto'>
            {children }
          </a>
        </h2>
        <div onClick={handleOnclick} className='sm:hidden'>
          {/* <span className={`block relative w-6 h-0.5 mb-2 bg-white transition-transform ${(isOpen) && '  rotate-45 translate-y-2.5'}`} />
          <span className={`block relative w-6 h-0.5 mb-2 bg-white transition-opacity ${(isOpen) && 'opacity-0'}`} />
          <span className={`block relative w-6 h-0.5 bg-white transition-transform ${(isOpen) && ' -rotate-45  -translate-y-2.5'}`} /> */}
          {
             (isOpen)
               ? <AiOutlineCloseSquare className='w-8 h-8' />
               : <TfiMenuAlt className='w-8 h-8' />
          }

        </div>

      </div>
      <nav className={`bg-white border sm:border-none absolute p-5 top-20 inset-x-0 transition transform origin-top-right ${(!isOpen) && 'hidden'} sm:block  sm:relative sm:top-0`}>
        <ul className='flex flex-col justify-center items-center gap-5 text-center w-full sm:flex-row sm:h-14'>
          <HeaderLink href='/' ariaLabel='redirección a la página principal'>Inicio</HeaderLink>
          <HeaderLink href='/contacto' ariaLabel='redirección a la pagina de contacto'>Contacto</HeaderLink>
          <HeaderLink href='/agendar' ariaLabel='redirección a la página para agendar revisión'>Agendamiento</HeaderLink>
          <HeaderLink href='https://www.instagram.com/watt_col/' target='_blank' ariaLabel='redirección al perfil de isntagram oficial'><TfiInstagram className='h-8 w-8' /></HeaderLink>
        </ul>
      </nav>
    </header>
  )
}
