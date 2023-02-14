import Toggle from './Toggle'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <div className='header-wrapper'>
        <div>
          <h1>Where in the world</h1>
        </div>
        <Toggle />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--secondary);
    color: var(--primary);
    padding: 10px 70px;
    box-shadow: var(--boxShadow);

    .toggle-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;

      button {
        all: unset;
        display: flex;
        transform: rotate(-20deg);
        transition: 0.5s;
      }
      span {
        display: block;
      }
    }
  }

  @media screen and (max-width: 835px) {
    .header-wrapper {
      padding: 10px 35px;
    }
  }

  @media screen and (max-width: 480px) {
    .header-wrapper {
      padding: 20px;

      .toggle-wrapper {
        gap: 5px;

        span {
          font-size: 14px;
        }
      }

      h1 {
        font-size: 18px;
      }
    }
  }
`

export default Header
