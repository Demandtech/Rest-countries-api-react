import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Toggle = () => {
 const {theme, toggleTheme} = useGlobalContext()
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
