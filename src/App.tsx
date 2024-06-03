import './App.css'
import MainDegreeShowCase from './Components/todayWeather/MainDegreeShowCase'
import SearchBar from './Components/SearchBar'
import rainy from '../public/rainy.jpg'
// import clear from '../public/clear.jpg'

function App() {

  return (
    <div className='relative min-h-screen py-5'>
      <div className=' fixed top-0 left-0 overflow-hidden -z-50'>
        <img src={rainy} alt="clear" className=' w-full min-h-screen h-full object-cover ' />
      </div>
      <SearchBar />
      <MainDegreeShowCase />
    </div>
  )
}

export default App
