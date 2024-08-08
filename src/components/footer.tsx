export function Footer() {
  return (
      <div >
        <div className='flex sm:flex-row flex-col-reverse w-full items-center gap-3 justify-center sm:justify-between p-5 mt-5'>
        <span className='text-sm '>© Copyright 2024. Todos os direitos reservados.</span>
        <span className='text-sm '>Hackathon das Olimpíadas de Paris 2024 <a href="https://codante.io/mini-projetos/hackathon-olimpiadas" target='_blank' rel="noopener noreferrer" className='text-sm font-semibold '>Codante</a></span>
        <span className='text-sm '>Desenvolvido por <a href="https://github.com/RafaeltiMoreira" target='_blank' rel="noopener noreferrer" className='text-sm font-semibold '>Rafael Moreira</a></span>
      </div>
      </div>
  )
}