import React, { useContext, useState, useEffect} from 'react'
//import { useSearchParams } from 'react-router-dom'
import { getUniqueValues } from './utils'

const AppContext = React.createContext()

const url = 'https://restcountries.com/v2/all'

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountry] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [country, setCountry] = useState({})
  const [isSingleLoading, setIsSingleLoading] = useState(false)
  const [borders, setBorders] = useState([])
  const [openSelect, setOpenSelect] = useState(false)
  const [region, setRegion] = useState('Filter by Region')
  const [regions, setRegions] = useState([])

  const handleSelect = (e) => {
    setRegion(e.target.textContent)
    setOpenSelect(false)

    const filtered = filteredCountries.filter(
      (cur) => cur.region === e.target.textContent
    )
    setCountries(filtered)
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value
    const filtered = filteredCountries.filter((cur) => {
      console.log(cur.name)
      console.log(e.target.value)
      return cur.name.toLowerCase().startsWith(searchTerm)
    })
    setCountries(filtered)
  }

  const fetchAllData = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      setIsLoading(false)
      setRegions(getUniqueValues(data))
      setFilteredCountry(data)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  const fetchSingleData = async (name) => {
    setIsSingleLoading(true)
    try {
      const request = await fetch(`https://restcountries.com/v2/name/${name}`)
      const data = await request.json()
      setCountry(data[0])
      data[0]?.borders?.map(border=>{
       return getCountryBorder(border)
      })
      setIsSingleLoading(false)
    } catch (err) {
      setIsSingleLoading(false)
      console.log(err)
    }
  }

  const getCountryBorder = async (border) => {
    try {
      const url = `https://restcountries.com/v2/alpha/${border}`
      const response = await fetch(url)
      const data = await response.json()
      setBorders((cur)=>[...cur,data.name])
      console.log(borders)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchAllData(url)
    //eslint-disable-next-line
  }, [url])

  return (
    <AppContext.Provider
      value={{
        countries,
        isLoading,
        country,
        isSingleLoading,
        fetchSingleData,
        handleSelect,
        openSelect,
        regions,
        region,
        handleChange,
        setOpenSelect,
        borders
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
