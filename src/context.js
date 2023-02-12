import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

export const AppProviver = ({ children }) => {
  const [theme, setTheme] = useState(getStorageTheme)
  const [countries, setCountries] = useState([])
  const [isLoading, setIsloading] = useState(false)

  const toggleTheme = () => {
    console.log('clicked')
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  const fetchData = async () => {
    setIsloading(true)
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      setIsloading(false)
      setCountries(data)
      console.log(data)
    } catch (err) {
     setIsloading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    document.documentElement.classList = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{ toggleTheme, theme, countries, isLoading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
