import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
// import { StyledHeader } from './styles/Header.styled'

const Header = ({ }) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <header className={`flex bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 justify-between w-[100vw] py-3 sticky top-0 left-0 right-0 z-[1000]`}>
        <div className="pl-3">
          <Link href={'/'}><a className='text-orange-800 font-bold uppercase'><h4 className='text-3xl'>Topmojo</h4></a></Link>
        </div>
        <div className='pr-3'>
          <button className={`px-4 py-2 text-sm bg-black text-white dark:bg-white dark:text-black rounded shadow`} onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light') }}>{theme === 'light' ? 'Dark' : 'Light'} mode</button>
        </div>
      </header>
    </>
  )
}

export default Header