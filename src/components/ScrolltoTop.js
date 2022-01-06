import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrolltoTop = () => {
    const {pathname}=useLocation()
    useEffect(()=>{
        window.scroll({
            top:0,
            left: 0
        })
    },[pathname])
    return null;
}

export default ScrolltoTop
