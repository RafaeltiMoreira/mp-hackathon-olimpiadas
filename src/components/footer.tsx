export function Footer() {
  return (
    <div className="w-full py-4">
    <div className="flex w-full items-center gap-3 justify-between p-5">
      {/* <span className='text-sm '>© Copyright 2024. Todos os direitos reservados.</span> */}
      <span className='text-sm '>Hackathon <a href="https://codante.io/mini-projetos/hackathon-olimpiadas" target='_blank' rel="noopener noreferrer" className='text-sm font-semibold '>Codante</a></span>
      <span className='text-sm '>Desenvolvido por <a href="https://github.com/RafaeltiMoreira" target='_blank' rel="noopener noreferrer" className='text-sm font-semibold '>Rafael Moreira</a></span>
    </div>
    </div>
  )
}