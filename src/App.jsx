import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/create' element={<CreatePost/>}/>
        <Route exact path='/signup' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
