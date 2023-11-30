import styled from "styled-components"
import { motion } from "framer-motion"
styled

export const Artigo = styled(motion.article)`
width: 50vw;
height: 65vh;
border: solid whitesmoke;
background-color: rgb(0,0,0, 0.5);
border-radius: 2%;
padding-left: 6px;
overflow-y: auto;
@media (max-width:600px){
  width: 80vw;
  height: 60vh;
  font-size: 1.2rem;
  z-index: 1;
}
`
export const Fundo = styled.div`
display: flex;
width: 55vw;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width:600px){
  width: 94%;
}
`
export const BotaoFechar = styled.button`
  cursor: pointer;
width: 2vw;
margin-left: 91%;
border-radius: 20%;
background-color: #f7c775;
@media (max-width:600px){
  width: 9vw;
  font-size: 1.2rem;
  margin-left:83vw;
}
`

export const P = styled.p`
font-size: 1.5rem;
@media (max-width:600px){
  font-size: 1.2rem;
}
`