import React from 'react'
import { Intro } from './Estilos/Estilo-Inicio.jsx'
import Giuliano from '../assets/Imagens/Giuliano.jpeg'
import Modal from './modal.jsx'
import { useState } from 'react'
import { SobreImg } from './Estilos/Estilo-sobre.jsx'
import { SobreFig } from './Estilos/Estilo-sobre.jsx'
import { SobreMim } from './Estilos/Estilo-sobre.jsx'
import { FigTexto } from './Estilos/Estilo-sobre.jsx'
import { Div } from './Estilos/Estilo-sobre.jsx'
import { easeInOut } from 'framer-motion'

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
              initial={{ opacity: 0, y:50 }}
              animate={{ opacity: 0.9, y:0, }}
              transition={{ ease:"easeInOut" }}
              src={Giuliano} />
          </Div>
          <FigTexto
            initial={{ opacity: 0, y:50 }}
            animate={{ opacity: 1, y:0 }}
            transition={{delay: 0.1, ease: 'easeInOut' }}
          > Desenvolvedor Front-End
            <SobreMim
               initial={{ opacity: 0, y:50 }}
               animate={{ opacity: 1, y:0 }}
               transition={{delay: 0.1, ease: 'easeInOut' }}
            onClick={() => setOpenModal(true)}>Saiba mais</SobreMim>
          </FigTexto>
        </SobreFig>
        <Modal isOpen={openModal} setOpenModal={setOpenModal} />

      </Intro>
    </>
  )
}
