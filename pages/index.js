/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/Layout";

import { Context } from "../utils/Context";
import { useContext } from "react";

import { CodeBlock, CopyBlock, dracula, ocean } from "react-code-blocks";

export default function Home() {
  const {
    state: { dark },
  } = useContext(Context);

  const html = `<img src="/uepg.png" alt="Logo UEPG" className="bg-black rounded-xl p-10 animate-pulse" />`;

  const css = `
  .imagem-uepg {
    background-color: black;
    border-radius: 20px;
    padding: 40px;
    animation: animacao 2s infinite;
}

@keyframes animacao {
    0% {
        opacity: 100%;
    }
    50% {
        opacity: 60%
    }
    100% {
        opacity: 100%;
    }
}
  `;

  return (
    <Layout>
      <Head>
        <title>REA - TailWind</title>
      </Head>

      <div className={`${!dark ? "" : "dark"}`}>
        <div
          className={` ease-out duration-300 flex flex-col items-center justify-center py-10 max-w-[1280px] w-full mx-auto`}
        >
          <h1 className="px-[20px] text-3xl mx-4 md:text-4xl xl:text-[82px] w-full text-cyan-500 font-bold mb-[10px]">
            Tailwind
          </h1>
          <span className="px-[20px] text-gray-400 w-full text-[26px]">
            Uma forma mais prática de usar CSS
          </span>
          <div className="sm:pl-[40px] px-[20px]">
            <p className={`paragraph ${dark && "text-gray-400"}`}>
              Assim como o Boostrap, Tailwind é um framework CSS que oferece a
              possibilidade de você criar layouts usando uma estrutura de CSS
              pronta. Isso permite que você otimize o tempo de criação de uma UI
              sem precisar fazer tudo manualmente. Criado a partir do princípio
              de classes utilitárias, a clássica sobreposição de classes
              dificilmente ocorre visto que cada elemento é estilizado inline.
            </p>
            <p className={`paragraph ${dark && "text-gray-400"}`}>
              Utilizando o conceito de{" "}
              <i className="font-normal">Mobile First</i>, o tailwind é muito
              útil para responsividade. Adicionando os prefixos <b>sm:</b>,{" "}
              <b>md:</b>, <b>lg:</b> e <b>xl:</b> antes dos nomes das classes, é
              possível fazer uso das{" "}
              <i className="font-normal">Media Queries</i>. Simples assim!
            </p>
          </div>
          <section className={`seccao ${dark && "border border-slate-600"}`}>
            <span className={`subtitle`}>
              Comparção entre utilizar Tailwind e CSS puro
            </span>
            <div className="flex items-center justify-center flex-col lg:flex-row">
              <div className="w-full lg:w-[50%]">
                <img
                  src="/uepg.png"
                  alt="Logo UEPG"
                  className="bg-black rounded-xl p-10 animate-pulse mx-auto"
                />
              </div>
              <div className="flex gap-2 justify-center items-start mt-5 flex-col w-full lg:w-[50%]">
                <div className="w-full">
                  <span className="text-cyan-500 text-xl text-center">
                    TailWind
                  </span>
                  <div className="code">
                    <CodeBlock text={html} language="html" theme={dracula} />
                  </div>
                </div>
                <div className="w-full">
                  <span className="text-cyan-500 text-xl text-center">
                    CSS puro
                  </span>
                  <div className="code">
                    <CodeBlock text={css} language="css" theme={dracula} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`seccao ${dark && "border border-slate-600"}`}>
            <h1 className="subtitle">Vantagens</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="">
                <h1 className="font-bold text-xl">Design Responsivo</h1>
                <p className="text-gray-400 mt-[20px] md:text-xl">
                  ✔ Tailwind é um framework que usa classes de utilidades,
                  melhorando o desempenho na hora programação, uma vez que os
                  elementos repetidos podem ser transformados em componentes.
                </p>
                <p className="text-gray-400 mt-[20px] md:text-xl">
                  ✔ No Tailwind é utilizado a abordagem de mobile-first. Isso
                  significa que quando um estilo é adicionado ao código, ele é
                  aplicado da menor para a maior resolução, facilitando a
                  responsividade
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-xl">Alto desempenho</h1>
                <p className="text-gray-400 mt-[20px] md:text-xl">
                  ✔ Fácil manuntenção do código, já que não é necessário ficar
                  procurando pelos arquivos css. Toda a estilização já está no
                  HTML.
                </p>
                <p className="text-gray-400 mt-[20px] md:text-xl">
                  ✔ Alto desempenho, visto que a página precisa carregar apenas
                  arquivos CSS, que são leves.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
