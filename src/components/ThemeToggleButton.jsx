import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index.js'

const themes = ['light', 'dark']

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted && theme === 'light' ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-slate-100 dark:bg-zinc-600">
      <button
        className={`bg-white cursor-pointer rounded-3xl p-2`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      > <IoSunny />
      </button>
    </div>
  ) : (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-slate-100 dark:bg-zinc-600">
      <button
        className={`bg-dark cursor-pointer rounded-3xl p-2`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      > <IoMoon />
      </button>
    </div >
  )
}
