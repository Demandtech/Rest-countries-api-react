import Country from './country'
import styled from 'styled-components'
import Search from './Search'
import { useGlobalContext } from '../context'

const Countries = () => {
  const { countries, isLoading } = useGlobalContext()
  //console.log(countries)
  if (isLoading) {
    return <Loading>Loading...</Loading>
  }
  return (
    <>
      <section>
        <Search />
      </section>
      <Wrapper>
        {countries.map((country, index) => {
          return <Country key={index} {...country} />
        })}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  padding: 0 70px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media screen and (max-width: 835px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 35px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 40px;
  }
`

const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: var(--primary);
`

export default Countries
