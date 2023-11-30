import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Artigo = styled(motion.article)`
width: 50vw;
height: 65vh;
border: solid whitesmoke;
background-color: rgb(0,0,0, 0.5);
border-radius: 2%;
padding-left: 6px;
overflow-y: auto;
@media (max-width:600px){
  width: 90vw;
  height: 60vh;
  font-size: 1.2rem;
  z-index: 1;
}
`
const Fundo = styled.div`
display: flex;
width: 55vw;
height: 75vh;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Botao = styled.button`
width: 2vw;
margin-left: 91%;
border-radius: 20%;
background-color: #f7c775;
@media (max-width:600px){
  width: 9vw;
  font-size: 1.2rem;
  margin-left:88vw;
}
`

const P = styled.p `
font-size: 1.5rem;
@media (max-width:600px){
  font-size: 1.2rem;
}
`
export default function Modal({ isOpen, setOpenModal }) {

  if (!isOpen) {
    return null
  }
  return (
    <>
      <Fundo>
        <Botao onClick={() => setOpenModal(false)}>x</Botao>
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
