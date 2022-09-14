import Head from "next/head";
import { useContext } from "react";
import Copy from "../components/Copy";

import Layout from "../components/Layout";
import { Context } from '../utils/Context'

export default function Instalacao() {
    const { state: { dark } } = useContext(Context)

    return (
        <Layout>
            <Head>
                <title>TailWind - Instalação</title>
            </Head>
            <div className={`${!dark ? '' : 'dark'} h-[100vh] flex flex-col items-center py-10 ease-out duration-300 px-[10%]`}>
                <h1 className='text-3xl mx-4 md:text-4xl xl:text-5xl text-center'> <b>Instalação</b></h1>
                <p className="w-[90%] text-center text-md md:text-xl py-5 text-gray-400">
                    Tailwind CSS funciona verificando todos os seus arquivos HTML, componentes JavaScript e quaisquer outros modelos para nomes de classe, gerando os estilos correspondentes e, em seguida, gravando-os em um arquivo CSS estático.
                    É rápido, flexível e confiável — com tempo de execução zero.
                </p>
                <div className="flex flex-wrap justify-center">
                    <span className="font-bold text-2xl ">HTML</span>
                    <p className="text-center text-gray-400 my-2">
                        A Instalação e utilização em arquivos do tipo HTML é extremamente simples e prática. Basta copiar o script abaixo no <b>head</b> da sua aplicação e pronto.
                    </p>
                    <Copy conteudo='<script src="https://cdn.tailwindcss.com"></script>' cola='Head' />
                </div>
                <div className="flex flex-col h-auto">
                    <span className="font-bold text-2xl">React e outro Frameworks</span>
                    <span className="text-center text-gray-400 my-2">Após criar seu app com create-react-app ou create-nex-app basta seguir os seguintes passos</span>
                    <div>
                        <div>
                            <span className="py-2 px-3 bg-slate-400 text-white rounded-full">1</span>
                            <span className="text-cyan-500 font-bold ml-3">Instalação do TailWind</span>
                        </div>
                        <p>O primeiro comando fará a instalaçao das dependencias via npm. Enquanto o segundo iniciará os arquivos `tailwind.config.js` e `postcss.config.js`, ambos necessários para o funcionamento correto do framework</p>
                        <Copy conteudo="npm install -D tailwindcss postcss autoprefixer" cola="Terminal" />
                        <Copy conteudo="npx tailwindcss init -p" cola="Terminal" />

                    </div>
                </div>
            </div>
        </Layout>
    )
}