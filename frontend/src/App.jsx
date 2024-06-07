
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter as Router , Routes , Route} from  "react-router-dom"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
