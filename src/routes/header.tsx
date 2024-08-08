import logoOlimpic from '../assets/logo_olimpic.svg';
import { NavLink } from '../components/nav-link';
import { Toggle } from '../components/theme/toggle';

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2 mb-4'>
      <img width={48} height={48} src={logoOlimpic} alt="Imagem da logo das Olimpíadas Paris 2024" />
      
      <nav className='flex items-center gap-5'>
        {/* <NavLink href='/'>Início</NavLink> */}
        <NavLink href='/'>Quadro de Medalhas</NavLink>
        {/* <NavLink href='/locais-olimpicos'>Locais Olímpicos</NavLink> */}
      </nav>

      <div className='ml-auto flex items-center'>
        <Toggle />
      </div>
    </div>
  )
}
