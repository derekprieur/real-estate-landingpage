import React from 'react'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import Button from './Button'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ setMobileMenuOpen }) => {
    return (
        <div className=' h-16 flex justify-between items-center py-4 px-8 z-50 fixed w-full'>
            <Link to='/' className=' text-white italic flex items-center px-4 h-full cursor-pointer no-underline'>ELIXR</Link>
            <FaBars onClick={() => setMobileMenuOpen(true)} className=' text-white w-8 h-8 cursor-pointer md:hidden' />
            <div className='hidden md:flex md:items-center'>
                {menuData.map((item, i) => (
                    <Link className=' text-white flex items-center px-4 h-full cursor-pointer no-underline' to={item.link} key={i}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className=' hidden md:flex items-center mr-6'>
                <Button primary big />
            </div>
        </div>
    )
}

export default Navbar