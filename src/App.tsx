import './App.css'
import MainDegreeShowCase from './Components/MainDegreeShowCase'
import SearchBar from './Components/SearchBar'
import rainy from '../public/rainy.jpg'

function App() {

  return (
    <div className='relative h-screen p-10'>
      <div className=' fixed top-0 left-0 overflow-hidden -z-50'>
        <img src={rainy} alt="clear" className=' w-full h-full object-cover ' />
      </div>
      <SearchBar />
      <MainDegreeShowCase />
    </div>
  )
}

export default App
