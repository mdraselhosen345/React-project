import './App.css'
import Countrys from './component/country/cuntrys'

const CountrysPromie = fetch('https://openapi.programming-hero.com/api/all')
function App() {
  return (
    <>
     <Suspense fallback={<p>NAdir vai loing...</p>}>
         <Countrys CountrysPromie={CountrysPromie}></Countrys>
     </Suspense>
 
    </>
  )
}

export default App
