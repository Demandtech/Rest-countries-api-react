import Toggle from './Toggle'

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <div>
          <h1>Where in the world</h1>
        </div>
        <Toggle />
      </div>
    </header>
  )
}

export default Header
