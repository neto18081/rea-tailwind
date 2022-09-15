import Head from "next/head";
import { useContext } from "react";
import Copy from "../components/Copy";

import Layout from "../components/Layout";
import { Context } from "../utils/Context";
import { CodeBlock, CopyBlock, dracula, ocean } from "react-code-blocks";

export default function Instalacao() {
  const {
    state: { dark },
  } = useContext(Context);

  const primeiro = `<script src="https://cdn.tailwindcss.com">`;
  const segundo = `npm install -D tailwindcss postcss autoprefixer`;
  const terceiro = `npx tailwindcss init -p`;
  const quarto = `
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }`;
  const quinto = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  `;
  return (
    <Layout>
      <Head>
        <title>TailWind - Instalação</title>
      </Head>
      <div className={`${!dark ? "" : "dark"} ease-out duration-300`}>
        <div
          className={` flex flex-col items-center py-10 max-w-[1280px] w-full px-[20px] mx-auto`}
        >
          <h1 className="text-3xl mx-4 md:text-4xl xl:text-[70px] w-full text-cyan-500 font-bold mb-[10px]">
            <b>Instalação</b>
          </h1>
          <p className={`paragraph ${dark && "text-gray-400"}`}>
            Tailwind CSS funciona verificando todos os seus arquivos HTML,
            componentes JavaScript e quaisquer outros modelos para nomes de
            classe, gerando os estilos correspondentes e, em seguida,
            gravando-os em um arquivo CSS estático. É rápido, flexível e
            confiável — com tempo de execução zero.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center my-10 w-full">
            <div className="w-full lg:w-[50%]">
              <span className="font-bold text-xl md:text-2xl">HTML</span>
              <p className={`paragraph ${dark && "text-gray-400"}`}>
                A Instalação e utilização em arquivos do tipo HTML é
                extremamente simples e prática. Basta copiar o script ao
                lado/abaixo no <b>head</b> da sua aplicação e pronto.
              </p>
            </div>
            <div className="code w-full lg:w-[50%] py-[20px] px-0 md:px-[20px]">
              <CodeBlock theme={dracula} text={primeiro} language="html" />
            </div>
          </div>

          <div className="flex flex-col h-auto w-full">
            <span className="font-bold text-xl md:text-2xl uppercase">
              React e outro Frameworks
            </span>
            <span
              className={`paragraph ${dark && "text-gray-400"} text-center`}
            ></span>
            {/* passo 1 */}
            <div className="h-max">
              <div className="mt-5">
                <span className="spanzinho">1</span>
                <span className="text-cyan-500 font-bold ml-3">
                  Instalação do TailWind
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-[50%]">
                  <p className={`paragraph ${dark && "text-gray-400"}`}>
                    O primeiro comando fará a instalaçao das dependencias via
                    npm. Enquanto o segundo iniciará os arquivos
                    `tailwind.config.js` e `postcss.config.js`, ambos
                    necessários para o funcionamento correto do framework
                  </p>
                </div>
                <div className="flex flex-col items-start mt-5 w-full md:w-[50%]">
                  <div className="code">
                    <CodeBlock theme={dracula} text={segundo} language="bash" />
                  </div>
                  <div className="code">
                    <CodeBlock
                      theme={dracula}
                      text={terceiro}
                      language="bash"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* passo 2 */}
            <div>
              <div className="mt-5">
                <span className="spanzinho">2</span>
                <span className="text-cyan-500 font-bold ml-3">
                  Configuração dos paths
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                <p
                  className={`paragraph ${
                    dark && "text-gray-400"
                  } w-[90%] md:w-[60%]`}
                >
                  Adicione os caminhos para todos os seus arquivos de modelo em
                  seu arquivo `tailwind.config.js`. Nesse passo é importante
                  especificar todos os caminhos com arquivos do tipo js, jsx,..
                  incluindo sua pasta de componentes.
                </p>
                <div className="flex flex-col items-center mt-5 w-full">
                  <div className="code w-full">
                    <CodeBlock text={quarto} language="css" theme={dracula} />
                  </div>
                </div>
              </div>
            </div>
            {/* passo 3 */}
            <div>
              <div className="mt-5">
                <span className="spanzinho">3</span>
                <span className="text-cyan-500 font-bold ml-3">
                  Adição das diretivas do taiwind no css
                </span>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-[50%]">
                  <p className={`paragraph ${dark && "text-gray-400"}`}>
                    Adicione as diretivas @tailwind para cada uma das camadas do
                    Tailwind ao seu arquivo ./src/index.css.
                  </p>
                </div>
                <div className="code w-full lg:w-[50%]">
                  <CodeBlock text={quinto} language="css" theme={dracula} />
                </div>
              </div>
            </div>
            {/* passo 4 */}
            <div>
              <div className="mt-5">
                <span className="spanzinho">4</span>
                <span className="text-cyan-500 font-bold ml-3">
                  Iniciar o projeto
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p
                  className={`paragraph w-full md:w-[70%] ${
                    dark && "text-gray-400"
                  }`}
                >
                  Por último mas não menos importante, execute ou reinicie a
                  execução do seu projeto. Pronto, seu melhor framework de
                  estilização está instalado e pronto para usar.
                </p>
                <div className="mt-5 tw w-full md:w-[30%]">
                  <div className="code">
                    <CodeBlock
                      text="npm run start"
                      language="bash"
                      theme={dracula}
                    />
                  </div>
                  <div className="code">
                    <CodeBlock
                      text="yarn dev"
                      language="bash"
                      theme={dracula}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
