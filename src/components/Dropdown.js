import React from 'react'
import { menuData } from '../data/MenuData'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Dropdown = ({ mobileMenuOpen, setMobileMenuOpen }) => {
    console.log(mobileMenuOpen)
    return (
        mobileMenuOpen && <div className=' fixed z-50 w-full h-full bg-orange-400 grid items-center top-0 left-0 ease-in-out opacity-100'>
            <div className=' absolute top-5 right-6 bg-transparent text-4xl cursor-pointer outline-none'>
                <FaTimes onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
            </div>
            <div>
                <div className=' grid grid-cols-1 text-center mb-4'>
                    {menuData.map((item, i) => (
                        <Link className=' flex items-center justify-center mb-16 text-2xl no-underline list-none text-white cursor-pointer ease-in-out hover:text-black' to={item.link} key={i}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Dropdown