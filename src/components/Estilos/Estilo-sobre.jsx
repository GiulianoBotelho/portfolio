import styled from "styled-components"
import { motion } from "framer-motion"
export const SobreImg = styled(motion.img)`
width: 30vw;
border: solid;
@media (max-width:600px){
    object-fit: contain;

}
`
export const SobreFig = styled.figure`

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
export const FigTexto = styled.figcaption`
 font-size: 1.6rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width:600px){
}
 `
export const Div = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
@media (max-width:600px){
  width: 99%;
}
`