import styled from "styled-components"
import { motion } from "framer-motion"
export const Intro = styled(motion.article) `
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
