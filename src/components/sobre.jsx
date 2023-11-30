import React from 'react'
import { Intro } from './Estilos/style.jsx'
import Giuliano from '../assets/Imagens/Giuliano.jpeg'
import { motion } from 'framer-motion'
import Modal from './modal.jsx'
import { useState } from 'react'
import styled from 'styled-components'

const SobreImg = styled(motion.img)`
width: 30vw;
@media (max-width:600px){

}
`
const SobreFig = styled.figure`

@media (max-width:600px){
  width: 100%;
  height: 60vh;
}
`
export const SobreMim = styled.button`
  width: 6vw;
 height:4vh;
  cursor: pointer;
  background: transparent;
  border: 1px solid #FFE482;
  outline: none;
  transition: 0.5s ease-in-out;
  color: white;
  font-size: 50%;
  &:hover {
  transition: 0.5s ease-in-out;
  background: #FFE482;
  color:black;
 
}
@media (max-width:600px){
  width:30vw;
}
`
const FigTexto = styled.figcaption`
 font-size: 1.6rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width:600px){
}
 `
const Div = styled(motion.div)`
border: solid;
@media (max-width:600px){
  width: 99%;
}
`
export default function Sobre() {
  const [openModal, setOpenModal] = useState(false)
  const imgAnimation = {
    open: { y: -50, },
    closed: { y: 0 },
  };
  return (
    <>
      <Intro>
        <SobreFig>
          <Div
            variants={imgAnimation}
            initial="closed"
            animate={openModal ? "open" : "closed"}
          >
            <SobreImg
              style={{ width: "400px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9, x: 0, }}
              transition={{ duration: 4 }}
              src={Giuliano} />
          </Div>
          <FigTexto
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: 'easeIn' }}
          > Desenvolvedor Front-End
            <SobreMim onClick={() => setOpenModal(true)}>Saiba mais</SobreMim>
          </FigTexto>
        </SobreFig>
        <Modal isOpen={openModal} setOpenModal={setOpenModal} />

      </Intro>
    </>
  )
}
