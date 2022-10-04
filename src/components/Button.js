import { Link } from 'react-router-dom'

import React from 'react'

const Button = (primary, big, path) => {
    console.log(primary)
    console.log(big)
    return (
        big ?
            <Link to={`/${path}`} className={`flex whitespace-nowrap outline-hidden border-none cursor-pointer no-underline transition-transform justify-center items-center py-4 px-10 hover:-translate-y-1 ${primary ? ' bg-lime-600' : ' bg-orange-400'}`}>Contact Us</Link>
            :
            <Link to={`/${path}`} className={`flex whitespace-nowrap outline-hidden border-none cursor-pointer no-underline transition-transform justify-center items-center py-3 px-6 ver:-translate-y-1 ${primary ? ' bg-lime-600' : ' bg-orange-400'}`}>Contact Us</Link>
    )
}

export default Button