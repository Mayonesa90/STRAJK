// import { Link } from 'react-router-dom'


export default function PostBookingBtn({handleClick}){

    return (
       
            <button 
                onClick={handleClick}
                className="bg-custom-red font-WorkSans font-bold text-white text-[24px] p-5 rounded-md tracking-wide hover:bg-[#b7304d]">
                STRIIIIIIKE!
            </button>
       

    )
}