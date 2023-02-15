import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const SingleCountry = () => {
  const { name } = useParams()
  const { fetchSingleData, isSingleLoading, country, borders } =
    useGlobalContext()
  const uniqueBorders =  [...new Set(borders)]

  console.log(uniqueBorders)
  useEffect(() => {
    fetchSingleData(name)
    //eslint-disable-next-line
  }, [name])

  if (isSingleLoading) {
    return <Loading>Loading...</Loading>
  }

  const {
    population,
    currencies,
    languages,
    capital,
    flags,
    nativeName,
    subregion,
    topLevelDomain,
    region,
  } = country

  return (
    <Wrapper>
      <Link to='/' className='btn'>
        <FaArrowLeft /> Back
      </Link>
      <div className='wrapper'>
        <div className='flag'>
          <img src={flags?.png} alt='' />
        </div>
        <div className='country-details'>
          <h3>{country.name}</h3>
          <div className='detail-content'>
            <div>
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population?.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Currency:{' '}
                {currencies?.map((currency, index) => (
                  <span key={index}>{currency.name}</span>
                ))}
              </p>
              <p>
                Languages:
                {languages?.map((language, index) => (
                  <span key={index}> {language.name} </span>
                ))}
              </p>
            </div>
          </div>
          <div className='borders'>
            <div>
              <p>Border Countries:</p>
            </div>
            <div className='borders-btns'>
              {uniqueBorders?.length ? (
                uniqueBorders.map((country, index) => {
                  return (
                    <Link key={index} className='btn' to={`/${country}`}>
                      {country}
                    </Link>
                  )
                })
              ) : (
                <p>No Borders...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
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
    box-shadow: var(--boxShadow);
    cursor: pointer;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    

    .flag {
      width: 47.5%;
      img {
        width: 100%;
        max-height: 22rem;
        object-fit: fill;
      }
    }

    .country-details {
      color: var(--primary);
      width: 47.5%;

      h3 {
        font-size: 32px;
        margin-bottom: 20px;
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
        width: 100%;
        justify-content: space-between;
        margin: 30px 0;
      }
    }
    .borders {
      display: flex;

      .borders-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        .btn {
          margin: 0;
        }
      }

      p {
        padding: 0;
        width: 150px;
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
      width: 100%;

      .flag {
        width: 100%;
        margin-bottom: 30px;
      }

      .country-details {
        width: 100%;
        padding-bottom: 20px;

        .detail-content {
          flex-direction: column;
        }
      }
     .borders{
      flex-direction:column;
      width: 100%;
      gap: 10px;

      .borders-btns{
        width: 100%;
        gap: 10px;

      }
     }
    }
  }
`

const Loading = styled.main`
  color: var(--primary);
  text-align: center;
`

export default SingleCountry
