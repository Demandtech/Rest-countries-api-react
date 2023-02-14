import { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const SingleCountry = () => {
  const { name } = useParams()
  const { fetchSingleData, isSingleLoading, country, borders } =
    useGlobalContext()

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

  console.log(population, currencies, languages, capital)

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
          <div className='borders-btns'>
           <p>Border Countries: </p> {borders?.length? borders.map((country, index) => {
              return (
                <Link key={index} className='btn' to={`/${country}`}>
                  {country}
                </Link>
              )
            }): <p>No Borders...</p>}
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
    cursor:pointer;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .flag {
      width: 47.5%;
      img {
        width: 100%;
        height: 350px;
        object-fit: cover;
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

        .detail-content {
          flex-direction: column;
        }
      }
    }
  }
`

const Loading = styled.main`
  color: #ffffff;
  text-align: center;
`

export default SingleCountry
