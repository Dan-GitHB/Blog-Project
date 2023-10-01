import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HomeBlogs } from './components/HomeBlogs'
import NavBar from './components/NavBar'
import { Test } from './components/Test'

function App() {
  return (
    <>
      <div className='parent-blogs'>
        <NavBar />
        <Router>
          <Routes>
            <Route path='/' element={<HomeBlogs />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
