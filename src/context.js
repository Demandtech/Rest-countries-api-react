import React, { useContext, useState, useEffect, useReducer } from 'react'
import reducer from './reducer'
import dataJson from './data.json'

const AppContext = React.createContext()

const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const initialState = {
 countries:dataJson,
 filter_countries: dataJson,
 isLoading: false,
}

export const AppProviver = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [theme, setTheme] = useState(getStorageTheme)
 
 //console.log(state)
  const toggleTheme = () => {
    console.log(dataJson)
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  const fetchData = async () => {
    dispatch({type: 'START_FETCHING'})
    try {
      const response = await fetch('https://restcountries.com/v2.1/all')
      const data = await response.json() 
      // console.log(data)
      dispatch({type: 'GET_DATA', payload:data}) 
      dispatch({ type: 'DONE_FETCHING' })
    } catch (err) {
     dispatch({type: 'DONE_FETCHING'})
      console.log(err)
    }
  }

  const handleChange = (e)=> {
    dispatch({type: 'SEARCH_COUNTRY', payload:e.target.value})
  }

  useEffect(() => {
    document.documentElement.classList = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{...state, toggleTheme, theme, handleChange, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
