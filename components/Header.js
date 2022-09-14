import { useState, useContext } from 'react'
import Link from 'next/link'
import { SiTailwindcss } from 'react-icons/si'
import { CgDarkMode } from 'react-icons/cg'
import { RiHome6Fill } from 'react-icons/ri'
import { FiDownload } from 'react-icons/fi'

import { Context } from '../utils/Context'

const Header = () => {

    const { state: { dark }, dispatch } = useContext(Context);

    return (
        <>
            <div className={`${!dark ? '' : 'dark'} px-5 flex justify-between items-center h-[70px] ease-out duration-300`}>
                <div className={`flex text-2xl items-center gap-1`}>
                    <SiTailwindcss className='text-cyan-500' />
                    <h1>TailWind</h1>
                </div>
                <div className='flex gap-6 text-xl items-center'>
                    <Link href="/">
                        <a className='hover:text-cyan-500 ease-out duration-150 hidden sm:block'>Home</a>
                    </Link>
                    <Link href="/">
                        <a className='md:hover:text-cyan-500 ease-out duration-150 sm:hidden'><RiHome6Fill /></a>
                    </Link>
                    <Link href="/instalacao">
                        <a className='md:hover:text-cyan-500 hidden sm:block ease-out duration-150'>Instalação</a>
                    </Link>
                    <Link href="/instalacao">
                        <a className='md:hover:text-cyan-500 ease-out duration-150 sm:hidden'><FiDownload /></a>
                    </Link>
                    <button onClick={() => dispatch({ type: "DARK_MODE" })}>
                        <CgDarkMode />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header