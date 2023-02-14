import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Countries from './components/countries'
//import Search from './components/Search'
import Header from './components/Header'
import SingleCountry from './components/SingleCountry'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/:name' element={<SingleCountry />} />
      </Routes>
    </Router>
  )
}


export default App
