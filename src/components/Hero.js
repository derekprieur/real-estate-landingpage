import { useState, useRef, useEffect } from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1))
    //     }
    //     timeout.current = setTimeout(nextSlide, 5000)

    //     return function () {
    //         if (timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current, length])


    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {

        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className=' h-screen relative overflow-hidden'>
            <div className=' h-full w-full flex justify-center items-center overflow-hidden relative'>
                {slides.map((slide, i) => (
                    <div className=' z-10 w-full h-full' key={i}>
                        {i === current && (
                            <div className=' absolute top-0 left-0 w-full h-full flex items-center justify-center before:absolute before:z-10 before:w-full before:h-screen'>
                                <img src={slide.image} alt='house' className=' absolute top-0 left-0 w-screen h-screen object-cover' />
                                <div className=' relative z-10 flex flex-col text-white'>
                                    <h1 className=' text-lg font-normal uppercase shadow-sm mb-4'>{slide.title}</h1>
                                    <p className=' mb-5'>{slide.price}</p>
                                    <Link to={`/`} className={`flex whitespace-nowrap outline-hidden border-none cursor-pointer no-underline transition-transform justify-center items-center py-4 px-10 hover:-translate-y-1 bg-gray-900`}>
                                        {slide.label}
                                        <IoMdArrowRoundForward className=' ml-2' />
                                    </Link>
                                </div>
                            </div>

                        )}
                    </div>
                ))}
                <div className=' absolute bottom-12 right-12 flex z-10'>
                    <IoArrowBack onClick={prevSlide} className=' w-12 h-12 cursor-pointer bg-gray-900 text-white rounded-full p-2 hover:bg-orange-400 hover:scale-105' />
                    <IoArrowForward onClick={nextSlide} className=' w-12 h-12 text-white cursor-pointer bg-gray-900 rounded-full p-2 hover:bg-orange-400 hover:scale-105' />
                </div>
            </div>
        </section >
    )
}

export default Hero