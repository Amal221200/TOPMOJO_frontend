import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'

const Header = ({ }) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <header className={`flex bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 items-center justify-between w-[100vw] py-3 sticky top-0 left-0 right-0 z-[1000]`}>
        <div className="pl-3">
          <Link href={'/'}><a className='text-orange-800 font-bold uppercase'><h4 className='md:text-3xl text-2xl'>Topmojo</h4></a></Link>
        </div>
        <div className='flex items-center gap-4 pr-3'>
        <nav className=''>
          <Link href={"/blogs"}><a className='dark:text-white text-black'>Blogs</a></Link>
        </nav>
          <button className={`md:px-3 md:py-1 p-2 md:text-lg text-xs bg-black text-white dark:bg-white dark:text-black rounded shadow`} onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light') }}>{theme === 'light' ? 'Dark' : 'Light'} mode</button>
        </div>
      </header>
    </>
  )
}

export default Header