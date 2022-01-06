import styled from "styled-components"
import { motion } from "framer-motion"

export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

export const Description= styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2{
    font-weight: lighter;
  }
`

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img{
    z-index: 2;
    position: relative;
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

export const Hide = styled.div`
  overflow: hidden;
`