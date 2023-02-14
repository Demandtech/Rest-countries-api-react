import React from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Search = () => {
  const {handleChange, setOpenSelect, openSelect, regions,region, handleSelect } = useGlobalContext()
  
  return (
    <div className='search'>
      <div className='search-input'>
        <input onChange={(e)=>handleChange(e)} type='text' placeholder='search for a country' />
        <button type='submit' className='search-btn'>
          <FaSearch className='search-icon' />
        </button>
      </div>
      <div className='select'>
        <button className='selected' onClick={() => setOpenSelect(!openSelect)}>
          <span style={{fontSize:'16px'}}>{region}</span>
          <FaChevronDown />
        </button>
        {openSelect && (
          <Wrapper className='options'>
            {regions.map((region, index) => {
              return <button onClick={(e)=>handleSelect(e)} key={index}>{region}</button>
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
    width:100%;
  }
`

export default Search
