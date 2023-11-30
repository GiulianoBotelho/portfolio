import styled from "styled-components"
import { motion } from "framer-motion"
export const Intro = styled(motion.article)`
height: 90vh;
width: 99%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width:600px){
    flex-direction: column;
}
`

export const MainTitulo = styled.h1`
color: #FFE482;
`



export const IniImg = styled(motion.img)`
cursor: pointer;
border-radius: 15%;
opacity: 0.8;
border: solid 2px;
box-shadow: 1px 2px 2px 2px black;
@media (max-width:600px){
  width: 100%;
}
`
export const ImgTexto = styled(motion.figcaption)`
font-size: 2rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width:600px){
}
`





