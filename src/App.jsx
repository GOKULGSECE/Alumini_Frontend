import JobList from './components/JobList'
import Login from './components/Login'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Signup from './components/Signup'
import Home from './components/Home'
import Main_Header from './components/Main_Header'
import AdminPanel from './components/Admin'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Main_Header/>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
      <Route path="/signup" element={<Signup></Signup>}/>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/joblist" element={<JobList />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
