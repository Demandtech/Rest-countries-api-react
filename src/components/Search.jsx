import React from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Search = () => {
  const {handleChange, setOpenSelect, openSelect, regions,region, handleSelect } = useGlobalContext()
  
  return (
    <Wrapper>
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
          <div className='options'>
            {regions.map((region, index) => {
              return <button onClick={(e)=>handleSelect(e)} key={index}>{region}</button>
            })}
          </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px;

  .search-input {
    width: 400px;
    position: relative;
    height: 40px;
    box-shadow: var(--boxShadow);

    input {
      width: 100%;
      height: 100%;
      padding-left: 45px;
      border: none;
      border-radius: 4px;
      background: var(--secondary);
      color: var(--primary);
      font-size: 16px;

      &::placeholder {
        color: var(--primary);
      }
    }

    .search-btn {
      all: unset;
      display: flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
    }

    .search-icon {
      fill: var(--primary);
    }
  }

  .select {
    position: relative;
    width: 200px;

    .selected {
      border: none;
      height: 40px;
      width: 100%;
      padding: 0 25px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--secondary);
      color: var(--primary);
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      box-shadow: var(--boxShadow);
    }
  }
  .options {
    position: absolute;
    padding: 15px;
    border-radius: 4px;
    color: var(--primary);
    background: var(--secondary);
    right: 0;
    left: 0;
    font-size: 16px;

    button {
      all: unset;
      padding: 5px 0;
      display: block;
      width: 100%;
    }
  }

  @media screen and (max-width: 835px) {
    padding: 40px 35px;

    .search-input {
      width: 200px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 40px 20px;
    flex-direction: column;
    gap: 20px;

    .search-input {
      width: 100%;
    }
  }
`

export default Search
