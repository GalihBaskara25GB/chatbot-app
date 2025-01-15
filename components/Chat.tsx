"use client"

import { useChat } from 'ai/react'
import React, { useEffect, useRef } from 'react'
import { Input } from './ui/input';
import Image from 'next/image';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const Scroll = () => {
        if (!chatContainerRef.current) return false;
        const atBottom = chatContainerRef.current.scrollHeight - chatContainerRef.current.clientHeight <= chatContainerRef.current.scrollTop + 1;

        if (!atBottom) {
            chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight)
        }
    }

    useEffect(() => {
        Scroll()
    }, [messages])

    return (
        <>
            <div className='flex flex-col w-full max-w-lg py-24 mx-auto h-screen overflow-auto' ref={chatContainerRef}>
                {messages.map((message) => (
                    <div key={message.id} className={`flex flex-row items-start gap-2 py-1 px-2 ${message.role === 'user' ? 'justify-end' : 'justify-start mb-2'}`}>
                        {message.role !== 'user' && (
                            <div className='flex'>
                                <Image
                                    src='bot-avatar.svg'
                                    alt="Avatar"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        )}
                        <div className={`max-w-[90%] flex-col bg-neutral-300 text-slate-900 px-4 py-1 ${message.role === 'user' ? 'rounded-l-xl rounded-br-xl' : 'rounded-r-xl rounded-bl-xl'}`}>
                            {message.content}
                        </div>
                        {message.role === 'user' && (
                            <div className='flex-col'>
                                <Image
                                    aria-hidden
                                    src='user-avatar.svg'
                                    alt="Avatar"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className='fixed bottom-0 w-full p-2 shadow-xl bg-neutral-900'>
                <Input
                    className='max-w-lg p-2 mb-4 border border-gray-300 rounded shadow-xl mx-auto'
                    placeholder='ask anything...'
                    value={input}
                    onChange={handleInputChange} />
            </form>
        </>
    )
}
