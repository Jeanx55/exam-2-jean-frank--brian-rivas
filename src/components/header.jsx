import Logo from '../assets/images/logo.svg'

export const Header = () => {
    return (
        <div className=" flex justify-between py-15 px-35">
            <img src={Logo} alt="" />
            <div className='flex gap-3 text-white'>
                <a className='hover:bg-cyan-300 rounded-full p-2 w-20 text-center' href="#">About</a>
                <a className='hover:bg-cyan-300 rounded-full p-2 w-20 text-center' href="#">Careers</a>
                <a className='hover:bg-cyan-300 rounded-full p-2 w-20 text-center' href="#">Events</a>
                <a className='hover:bg-cyan-300 rounded-full p-2 w-20 text-center' href="#">Products</a>
                <a className='hover:bg-cyan-300 rounded-full p-2 w-20 text-center' href="#">Support</a>
            </div>
        </div>
    )
}

