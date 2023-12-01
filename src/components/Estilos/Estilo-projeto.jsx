import styled from "styled-components"
import { motion } from "framer-motion"
export const FigProImg = styled.figure`
text-align: center;
width: 35vw;
display: flex;
flex-wrap: wrap;
@media (max-width:600px){
  width: 100%;
  height: 100vh;
 }
`

export const ProImg = styled(motion.img)`
width: 34.9vw;
height: 35vh;
box-shadow: 4px 4px black;
border: solid goldenrod 1.2px;
opacity: 0.8;
object-fit:cover;
@media (max-width:600px){
  width: 100%;
 }

`

export const ProSection = styled.section`
height: 90vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
overflow-y: auto;
`
export const FigTexto = styled(motion.figcaption)`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
height: 18vh;
width: 35vw;
border: solid black 1px;
box-shadow: 4px 4px black;
background-color: rgb(10000,10000,10000, 0.9);
color:black;
font-family: 'Courier New', Courier, monospace;
font-size: 1.2rem;
font-style: italic;
overflow-y: auto;
@media (max-width:600px){
  width: 100%;
  height: 38vh;
  font-size: 1.1rem;
 }
`

export const Img = styled(motion.img)`
 width:40px;
 
`

export const ProTitulo = styled(motion.h1)`
font-size: 1.5rem;
border-bottom: solid 1px;
transition: 500ms;
cursor: pointer;
color: goldenrod;
&:hover{
  transition: 500ms;
}
`