import { Children } from "react";
import { RiFileCopyFill } from 'react-icons/ri'

export default function Copy({ conteudo, cola }) {
    function copiar() {
        const texto = document.getElementById('textaum').innerHTML;
        navigator.clipboard.writeText(texto)
    }
    return (
        <div className="bg-slate-500 w-[100%] sm:w-[80%] xl:w-[50%] pt-2 rounded-tl-2xl rounded-tr-xl rounded-bl-xl">
            <div className="flex justify-between px-3  ">
                <h1 className="font-bold px-2 text-black border-b-[3px] border-black">{cola}</h1>
                <button onClick={copiar}>
                    <RiFileCopyFill className="hover:text-gray-400 ease-out duration-200" />
                </button>
            </div>
            <div className="bg-slate-400 p-3 rounded-bl-xl">
                <p className="text-slate-900" id="textaum">{conteudo}</p>
            </div>
        </div>
    )
}