import {useState} from 'react'
import NavIconClosed from '../assets/nav-icon-closed.svg'
import NavIconOpen from '../assets/nav-icon-open.svg'
import { Link } from 'react-router-dom'

export default function Nav(){

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
        {menuOpen ? 
        <nav className='bg-custom-black absolute top-0 left-0 w-full h-full flex flex-col  items-center'>
            <button onClick={toggleMenu} className=' absolute top-[22px] left-[23px]'>
                <img src={NavIconOpen} alt="" />
            </button> 
            <ul className=' font-BebasNeune text-custom-red flex flex-col gap-[48px] text-[48px] text-center h-full  place-content-center'>
                <li><Link to="../booking">BOOKING</Link></li>
                <li><Link to="../confirmation">CONFIRMATION</Link></li>
            </ul>
        </nav>
        
        : 
        <button onClick={toggleMenu} className=' absolute top-[22px] left-[23px]'>
            <img src={NavIconClosed} alt="" />
        </button>}
        </>
    )
}