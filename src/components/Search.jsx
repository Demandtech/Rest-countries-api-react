import React, { useState } from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { getUniqueValues } from '../utils'

const Search = () => {
  const { countries, handleChange } = useGlobalContext()
  const regions = getUniqueValues(countries)
  const [OpenSelect, setOpenSelect] = useState(false)
  const [region, setRegion] = useState('Filter by Region')

  const handleSelect = (str)=> {
    setRegion(str)
    setOpenSelect(false)
  }
  
  return (
    <div className='search'>
      <div className='search-input'>
        <input onChange={(e)=>handleChange(e)} type='text' placeholder='search for a country' />
        <button type='submit' className='search-btn'>
          <FaSearch className='search-icon' />
        </button>
      </div>
      <div className='select'>
        <button className='selected' onClick={() => setOpenSelect(!OpenSelect)}>
          <span style={{fontSize:'16px'}}>{region}</span>
          <FaChevronDown />
        </button>
        {OpenSelect && (
          <Wrapper className='options'>
            {regions.map((region, index) => {
              return <button onClick={()=>handleSelect(region)} key={index}>{region}</button>
            })}
          </Wrapper>
        )}
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  position: absolute;
  padding: 15px;
  border-radius: 4px;
  color: var(--primary);
  background: var(--secondary);
  right: 0;
  left: 0;
  font-size: 16px;

  button {
    all:unset;
    padding: 5px 0;
    display:block;
  }
`

export default Search
