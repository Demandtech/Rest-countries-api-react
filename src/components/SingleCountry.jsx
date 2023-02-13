import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { formatNumber } from '../utils'

const SingleCountry = () => {
  const { filter_countries } = useGlobalContext()
  const [country, setCountry] = useState(null)
  const { name } = useParams()

  useEffect(() => {
    const singleCon = filter_countries.find((country) => {
      return country.name === name
    })
    setCountry(singleCon)
    // eslint-disable-next-line
  }, [name])

  return (
    country && (
      <Wrapper>
        <Link className='btn' to={'/'}>
          <FaArrowLeft />
          Back
        </Link>
        <div className='wrapper'>
          <div className='flag'>
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className='country-detail'>
            <h3>{country.name}</h3>
            <div className='detail-content'>
              <div>
                <p>
                  Native Name: <span>{country.nativeName}</span>
                </p>
                <p>
                  Population: <span>{formatNumber(country.population)}</span>
                </p>
                <p>
                  Region: <span>{country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>

              <div>
                <p>
                  Top Level Domain:{' '}
                  <span>{country.topLevelDomain.map((domain) => domain)}</span>
                </p>
                <p>
                  Currency: <span>{country.currencies[0].name}</span>
                </p>
                <p>
                  Languages:
                  {country.languages.map((language) => {
                    return <span> { language.name } </span> 
                  })}
                </p>
              </div>
            </div>
            <p>Border Countries:</p>
          </div>
        </div>
      </Wrapper>
    )
  )
}

const Wrapper = styled.main`
  margin-top: 50px;
  padding: 0 70px;
  .btn {
    all: unset;
    display: inline-flex;
    gap: 10px;
    align-items: center;
    background: var(--secondary);
    color: var(--primary);
    margin-bottom: 40px;
    padding: 7px 15px;
    border-radius: 4px;
    box-shadow: 2px 2px var(--bg);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .flag {
      width: 45%;
      img {
        width: 100%;
        height: 350px;
        object-fit: cover;
      }
    }

    .country-detail {
      color: var(--primary);
      width: 45%;

      h3 {
        font-size: 32px;
      }

      p {
        padding-bottom: 10px;
        font-weight: 600;

        span {
          font-weight: 300;
        }
      }

      .detail-content {
        display: flex;
        justify-content: space-between;
        margin: 30px 0;
      }
    }
  }

  @media screen and (max-width: 835px) {
    padding: 0 35px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 20px;

    .wrapper {
      flex-direction: column;

      .flag {
        width: 100%;
        margin-bottom: 30px;
      }

      .country-detail {
        width: 100%;


        .detail-content{
         flex-direction: column;
        }
      }

      
    }
  }
`

export default SingleCountry
