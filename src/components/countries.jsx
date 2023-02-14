import Country from './country'
import styled from 'styled-components'
import Search from './Search'
import { useGlobalContext } from '../context'



const Countries = () => {
  const {countries, isLoading} =useGlobalContext()
  //console.log(countries)
  if (isLoading) {
    return <Wrapper>Loading...</Wrapper>
  }
  return (
    <>
      <section>
      <Search />
      </section>
      <section>
        <div className='countries-container'>
          {countries.map((country, index) => {
            return <Country key={index} {...country} />
          })}
        </div>
      </section>
    </>
  )
}

const Wrapper = styled.div`
 text-align:center;
 font-size: 18px;
 color:#ffffff;
`

export default Countries
