import React from 'react'
import { Artigo } from './Estilos/Estilo-modal.jsx'
import { Fundo } from './Estilos/Estilo-modal.jsx'
import { BotaoFechar } from './Estilos/Estilo-modal.jsx'
import { P } from './Estilos/Estilo-modal.jsx'

export default function Modal({ isOpen, setOpenModal }) {

  if (!isOpen) {
    return null
  }
  return (
    <>
      <Fundo>
        <BotaoFechar onClick={() => setOpenModal(false)}>x</BotaoFechar>
        <Artigo
          initial={{ x: 0, opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}

        >
          <P>
            Desde os 15 anos, trabalhei em diferentes áreas de TI, enriquecendo meu conhecimento em diversos aspectos. No entanto, em um determinado momento, me vi atraído pela área de desenvolvimento.

            Atualmente, tenho me dedicado ao estudo e aprimoramento das tecnologias de Front-End, como:
            <P>
              HTML5, CSS, SASS, Styled-Components, Framer-Motion, JavaScript, React.JS, Next.JS  Git/Github.
            </P>
            Busco constantemente aprofundar meu conhecimento nessas ferramentas, com o objetivo de criar interfaces responsivas, envolventes e intuitivas. A cada dia, trabalho para alcançar resultados reais de crescimento, seja por meio de projetos concretos, conexões significativas ou relacionamentos profissionais enriquecedores, buscando sempre pessoas já inseridas no mercado para me servir de inspiração.
          </P>
          <P>
            Atualmente trabalho com infraestrutura de rede de computadores e servidores. Em transição de carreira, sigo confiante que estou me dedicando e evoluindo exponencialmente dia a dia.
          </P>
        </Artigo>
      </Fundo>
    </>
  )
}
