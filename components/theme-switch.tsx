"use client"
import { useThemeFunc } from '@/context/themecontext'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

function ThemeSwitch() {
    const {theme, toogleTheme} = useThemeFunc()
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950' onClick={toogleTheme}>
        {
            theme === "light" ? <BsSun /> : <BsMoon />
        }
    </button>
  )
}

export default ThemeSwitch