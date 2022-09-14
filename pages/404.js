import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import { BsFillEmojiDizzyFill } from 'react-icons/bs'
import Layout from '../components/Layout'
import { useContext } from "react";
import { Context } from '../utils/Context'


const Page404 = () => {
    const { state: { dark } } = useContext(Context)

    return (
        <Layout>
            <div className={`${!dark ? '' : 'dark'} text-center pt-10 h-[calc(100vh-100px)]`}>
                <div className='flex text-4xl font-bold justify-center items-stretch'>
                    <BsFillEmojiDizzyFill />
                    <h1 className='ml-3'> Parece que essa página não foi encontrada ou ainda não foi criada</h1>
                </div>
                <span>Volte para a
                    <Link href="/">
                        <a className='text-red-500 hover:animate-pulse'> página inicial</a>
                    </Link>
                </span>
            </div>
        </Layout>
    )
}

export default Page404