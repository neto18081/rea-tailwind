import Head from 'next/head'
import Layout from '../components/Layout'

import { Context } from '../utils/Context'
import { useContext } from 'react'

export default function Home() {

  const { state: { dark } } = useContext(Context)

  return (
    <Layout>
      <Head>
        <title>REA - TailWind</title>
      </Head>

      <div className={`${!dark ? '' : 'dark'}`}>
        <div className={` ease-out duration-300 flex flex-col items-center justify-center py-10 max-w-[1280px] w-full px-[20px] mx-auto`}>
          <h1 className='text-3xl mx-4 md:text-4xl xl:text-5xl w-full'> <b className='text-cyan-500'>TailWind</b>, um novo modo de estilização WEB</h1>
          <div className='sm:pl-[20px]'>
            <p className='mt-5 text-xl text-gray-400'>
              Assim como o Boostrap, Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta. Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente.
              Criado a a partir do princípio de classes utilitárias, a clássica sobreposição de classes dificilmente ocorre visto que cada elemento é estilizado inline.
            </p>
            <p className='mt-5 text-xl text-gray-400'>
              Assim como o Boostrap, Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta. Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente.
              Criado a a partir do princípio de classes utilitárias, a clássica sobreposição de classes dificilmente ocorre visto que cada elemento é estilizado inline.
            </p>
          </div>
          <section className='seccao'>
            <p className='text-center mb-5 text-gray-400'>Segue abaixo a comparação de códigos entre estilizações feitas para a mesma imagem usando TailWind e CSS comum.</p>
            <img src="/uepg.png" alt="Logo UEPG"
              className='bg-black rounded-xl p-10 animate-pulse '
            />
            <div className='flex gap-2 justify-center items-start mt-5 flex-col md:flex-row'>
              <div className='w-full md:w-[50%]'>
                <h1 className='text-cyan-500 text-xl text-center'>TailWind</h1>
                <img src="/tw-image.png" alt="" className='rounded-2xl object-contain' />
              </div>
              <div className='w-full md:w-[50%]'>
                <h1 className='text-cyan-500 text-xl text-center'>CSS somente</h1>
                <img src="/code.png" alt="" className='object-contain rounded-2xl ' />
              </div>

            </div>
          </section>

          <section className='seccao'>
            <h1 className='text-cyan-500 text-3xl font-bold mb-6'>Vantagens</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className=''>
                <h1 className='font-bold text-xl'>Design Responsivo com Tailwind</h1>
                <p className='text-gray-400 mt-2 md:text-xl'>
                  ✔ Tailwind é um framework que usa classes de utilidades, os elementos podem ficar lotados de classes, sem contar a repetição e a manutenção para vários componentes ao mesmo tempo.
                  <br /> ✔ Por isso permite que você crie classes customizadas que recebem as classes de utilidade, e depois basta chamar as classes criadas que os componentes vão receber todas as propriedades selecionadas.
                </p>
              </div>
              <div className=''>
                <h1 className='font-bold text-xl'>Design Responsivo com Tailwind</h1>
                <p className='text-gray-400 mt-2 md:text-xl'>
                  ✔ No Tailwind é utilizado a abordagem de mobile-first, similar ao que temos no Bootstrap, e isto quer dizer que quando um estilo é adicionado ao código, ele é aplicado da menor para a maior resolução
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>

  )
}
