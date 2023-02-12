import React, {useState} from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { getUniqueValues } from '../utils'

const Search = () => {
  const { countries } = useGlobalContext()
  const regions = getUniqueValues(countries);
  const [OpenSelect, setOpenSelect] = useState(false)
  return (
    <div className='search'>
      <div className='search-input'>
        <input type='text' placeholder='search for a country' />
        <button type='submit' className='search-btn'>
          <FaSearch className='search-icon' />
        </button>
      </div>
      <div className='select'>
        <button className='selected' onClick={()=>setOpenSelect(!OpenSelect)}>
          <span>Filter by region</span>
          <FaChevronDown />
        </button>
        {OpenSelect && (
          <Wrapper className='options'>
            {regions.map((region, index) => {
              return <div key={index}>{region}</div>
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
  background:var(--secondary);
  right:0;
  left:0;

  div{
   padding:5px 0;
  }
`

export default Search
