import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
    margin: 8rem 0 0 0;
`

export const Header = styled.h1`
    width: 100%;
    text-align: right;
    font-size: 5rem;
    font-family: 'Sedgwick Ave Display', cursive;
    padding: 2rem;
    @media(max-width: 950px){
        font-size: 3rem;
    }
`
export const ProductContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap:wrap;
   margin: 3rem 0;
   justify-content: space-around;
`
export const ProductElement = styled.div`
    width: 22%;
    text-align: right;
    padding:0.5rem;
    margin: 0.5rem 0;
    border: 2px solid white;
    cursor:pointer;
    overflow: hidden;
    @media(max-width: 950px){
        width: 49%;
    }
    &:hover{
        border: 2px solid orange;
    }
`
export const ProductElementImg = styled(motion.img)`
    display: block;
    margin: 0 auto;
    width: 90%;
`
export const ProductElementPrice = styled(motion.p)`
    margin: 5rem 0.5rem 0 0.5rem;
    font-size:0.9rem;
`
export const ProductElementTitle = styled(motion.p)`
    margin: 1rem 1rem 0 1rem;
    font-size:0.9rem;
    text-align: center;
    font-weight: bold;
    margin: 1rem 0.5rem 4rem 0.5rem;
`