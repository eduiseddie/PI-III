import { FaHeadphonesAlt } from 'react-icons/fa';
import Object from '@/components/object';
import { Modal } from "@mui/material";
import React from 'react';

export default function InitialModal({ open, isOpen, playing, isPlaying }) {
    const handleAudio = () => {
        isOpen(false)
        isPlaying(true)
    }
    return (
        <Modal
            open={open}
            onClose={() => handleAudio()}
            className="h-screen w-screen justify-center items-center flex bg-sky-400 bg-opacity-10 backdrop-filter backdrop-blur-md"
            hideBackdrop={true}
            disableEscapeKeyDown={true}
        >
            <>
                <div className="absolute top-0 right-0 z-0 w-full h-full">
                    <Object model={'fishes'} objPosition={'0, 0, 1'} color={'0xaba5f0'} timeScale={0.5} />
                </div>
                <div className="p-10 bg-sky-950 flex justify-between items-center flex-col border-0 rounded-3xl outline-none focus:outline-none relative">
                    <div className={`justify-center flex-col items-center text-center flex`}>
                        <FaHeadphonesAlt color='#ffffff' size={40} />
                        <p className="text-white text-1xl">Esse site usa áudio</p>
                        <p className="text-white text-1xl">Use fones de ouvido para melhor experiência</p>
                    </div>
                    <button onClick={() => handleAudio()} className="justify-center items-center text-center flex bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-3xl">
                        <p className="text-white text-1xl">Clique aqui para aventurar-se</p>
                    </button>
                </div>
            </>
        </Modal>
    )

}