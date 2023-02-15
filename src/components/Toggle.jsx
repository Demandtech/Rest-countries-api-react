import React, {useEffect, useState} from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const getStorageTheme = ()=> {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}

const Toggle = () => {
 const [theme, setTheme] = useState(getStorageTheme)

 useEffect(()=>{
  document.documentElement.classList = theme
  localStorage.setItem('theme', theme)
 }, [theme])

 const toggleTheme = ()=> {
  if(theme === 'light-theme'){
    setTheme('dark-theme')
  }else if(theme === 'dark-theme'){
    setTheme('light-theme')
  }
 }
  return (
    <div className='toggle-wrapper'>
      <div>
        <button onClick={toggleTheme}>
          {theme === 'light-theme' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div>
        {theme === 'light-theme' ? (
          <span>Light Mode</span>
        ) : (
          <span>Dark Mode</span>
        )}
      </div>
    </div>
  )
}

export default Toggle
