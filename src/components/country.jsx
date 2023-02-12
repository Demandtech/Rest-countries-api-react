import styled from 'styled-components'
import { formatNumber } from '../utils'

const Country = ({ name, flags, population, capital,region }) => {
 
  return (
    <Wrapper className='country'>
      <img src={flags.png} alt={flags.alt} />
      <div className='content'>
        <h6>{name.common}</h6>
        <p>
          Population: <span>{formatNumber(population)}</span>
        </p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  border-radius: 0 0 8px 8px;
  img {
    border-radius: 8px 8px 0 0;
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
  .content {
    padding: 15px;
    h6 {
      font-weight: 800;
      font-size: 18px;
      padding-bottom: 15px;
    }
    p {
      font-weight: 800;
      font-size: 14px;
      span {
        font-weight: 400;
      }
    }
  }
`

export default Country
